import { formatInviteCode, generateInviteCode, normalizeInviteCode } from "./invite-code";
import {
  decryptSecret,
  encryptSecret,
  hashesMatch,
  lookupHash,
  lookupHashes,
  type InviteKeys,
} from "./invite-crypto";
import type { InviteRecord, InviteStore } from "./invite-store";
import { generateManagementToken, generateURLToken, isWellFormedToken } from "./invite-tokens";

/**
 * Remeet's invitation domain: the entrance to a CloudKit share, and nothing
 * else about Remeet.
 *
 * Deliberately free of HTTP — the route layer turns these results into
 * responses. It is also free of any other app in this API: an invitation knows
 * about a CKShare URL, two tokens and an expiry, and that is the whole of it.
 *
 * Three rules the whole design rests on, worth stating before the code:
 *
 *  * a token is never stored, only `HMAC-SHA256(secret, token)`, so a copy of
 *    the database yields no working invitation;
 *  * the CKShare URL is encrypted above D1's own encryption, because it is the
 *    entrance to somebody's private CloudKit share;
 *  * every failure is the same `INVITE_UNAVAILABLE` — unknown, expired,
 *    revoked, superseded and wrong-management-token are indistinguishable from
 *    outside, so working through the space teaches nothing.
 */
export interface InviteServiceContext {
  store: InviteStore;
  keys: InviteKeys;
  /** The site, not this API: `https://remeet.tmkch.io`. */
  baseURL: string;
  ttlDays: number;
  now?: () => Date;
  /**
   * Counts what happened, by outcome and day, so abuse has a shape somebody
   * can look at. Never told which invitation, which token, or which address —
   * an audit trail that identified invitations would be the thing it is meant
   * to protect.
   */
  record?: (outcome: InviteOutcome) => Promise<void>;
}

export type InviteOutcome =
  | "created"
  | "resolved"
  | "resolve_unavailable"
  | "code_failed"
  | "previewed"
  | "revoked"
  | "rejected";

export type InviteFailure = "INVALID_REQUEST" | "INVITE_UNAVAILABLE";

export type InviteResult<T> = { ok: true; value: T } | { ok: false; error: InviteFailure };

export interface CreatedInvite {
  inviteUrl: string;
  inviteCode: string;
  managementToken: string;
  expiresAt: string;
}

/**
 * Deletes invitations well past their expiry. Run from a schedule rather than
 * from a request: the only thing that makes flooding the create endpoint worth
 * anything is rows that stay, and a nightly sweep bounds that without putting
 * a delete in front of every person sending an invitation.
 *
 * The grace period is not politeness. An invitation cannot be resolved once it
 * has expired either way; keeping the row a while longer is what stops
 * "expired" and "never existed" from being distinguishable by timing.
 */
export async function cleanUpExpiredInvites(
  store: InviteStore,
  now: Date = new Date(),
  graceMs = 24 * 60 * 60 * 1000,
): Promise<void> {
  await store.deleteExpiredBefore(new Date(now.getTime() - graceMs).toISOString());
}

/**
 * Looks a value up under every key it could have been stored with — the
 * current one, and the one being retired if a rotation is in progress.
 */
async function findBy(
  context: InviteServiceContext,
  value: string,
  find: (hash: string) => Promise<InviteRecord | null>,
): Promise<InviteRecord | null> {
  for (const hash of await lookupHashes(context.keys, value)) {
    const record = await find(hash);
    if (record) return record;
  }
  return null;
}

const fail = (error: InviteFailure): InviteResult<never> => ({ ok: false, error });
const succeed = <T>(value: T): InviteResult<T> => ({ ok: true, value });

export async function createInvite(
  context: InviteServiceContext,
  body: unknown,
): Promise<InviteResult<CreatedInvite>> {
  const ckShareUrl = readShareURL(body);
  if (!ckShareUrl) return fail("INVALID_REQUEST");

  const now = (context.now ?? (() => new Date()))();
  const id = crypto.randomUUID();
  const urlToken = generateURLToken();
  const inviteCode = generateInviteCode();
  const managementToken = generateManagementToken();
  const shareURLHash = await lookupHash(context.keys.tokenSecret, ckShareUrl);

  // A new invitation supersedes the ones before it for the same share: the old
  // link stops resolving here. That is the entrance closing, not the share —
  // CloudKit remains the only thing that decides who is actually in the
  // reunion, and anybody already inside stays inside.
  await context.store.revokeActiveForShare(shareURLHash, now.toISOString());

  const expiresAt = new Date(now.getTime() + context.ttlDays * 24 * 60 * 60 * 1000);
  await context.store.insert({
    id,
    urlTokenHash: await lookupHash(context.keys.tokenSecret, urlToken),
    inviteCodeHash: await lookupHash(context.keys.tokenSecret, inviteCode),
    shareURLHash,
    encryptedShareURL: await encryptSecret(context.keys.urlKey, id, ckShareUrl),
    encryptedInviteCode: await encryptSecret(context.keys.urlKey, id, inviteCode),
    managementTokenHash: await lookupHash(context.keys.tokenSecret, managementToken),
    status: "active",
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    revokedAt: null,
  });

  await context.record?.("created");
  return succeed({
    inviteUrl: `${context.baseURL.replace(/\/$/, "")}/i/${urlToken}`,
    inviteCode: formatInviteCode(inviteCode),
    managementToken,
    expiresAt: expiresAt.toISOString(),
  });
}

/**
 * Token or code — the same invitation reached two ways.
 *
 * Only ever answered to the app. The landing page gets `previewInvite` below,
 * which cannot return a CKShare URL at all.
 *
 * @param onFailedCode runs when a *code* did not resolve, so the caller can
 *   charge for the attempt. A code carries around fifty bits, which is few
 *   enough that guessing is a real strategy; a link carries a hundred and
 *   sixty, which is not.
 */
export async function resolveInvite(
  context: InviteServiceContext,
  body: unknown,
  onFailedCode?: () => Promise<void>,
): Promise<InviteResult<{ ckShareUrl: string; expiresAt: string }>> {
  const token = readToken(body);
  const code = normalizeInviteCode((body as { code?: unknown } | null)?.code);
  if (!token && !code) return fail("INVALID_REQUEST");

  const now = (context.now ?? (() => new Date()))();
  const record = token
    ? await findBy(context, token, (hash) => context.store.findByURLTokenHash(hash))
    : await findBy(context, code as string, (hash) => context.store.findByInviteCodeHash(hash));

  if (!isUsable(record, now)) {
    if (code) await onFailedCode?.();
    await context.record?.(code ? "code_failed" : "resolve_unavailable");
    return fail("INVITE_UNAVAILABLE");
  }

  try {
    const ckShareUrl = await decryptSecret(context.keys, record.id, record.encryptedShareURL);
    await context.record?.("resolved");
    return succeed({ ckShareUrl, expiresAt: record.expiresAt });
  } catch {
    await context.record?.("resolve_unavailable");
    return fail("INVITE_UNAVAILABLE");
  }
}

/**
 * What the landing page is allowed to know: that the invitation is live, and
 * the code somebody can type on another device.
 *
 * Not a widening — whoever is asking already holds the token, and the token
 * opens everything the code opens — but emphatically not `resolveInvite`
 * either: no CKShare URL reaches a browser, ever.
 */
export async function previewInvite(
  context: InviteServiceContext,
  body: unknown,
): Promise<InviteResult<{ inviteCode: string; expiresAt: string }>> {
  const token = readToken(body);
  if (!token) return fail("INVALID_REQUEST");

  const now = (context.now ?? (() => new Date()))();
  const record = await findBy(context, token, (hash) => context.store.findByURLTokenHash(hash));
  if (!isUsable(record, now) || !record.encryptedInviteCode) return fail("INVITE_UNAVAILABLE");

  try {
    const code = await decryptSecret(context.keys, record.id, record.encryptedInviteCode);
    await context.record?.("previewed");
    return succeed({ inviteCode: formatInviteCode(code), expiresAt: record.expiresAt });
  } catch {
    return fail("INVITE_UNAVAILABLE");
  }
}

export async function revokeInvite(
  context: InviteServiceContext,
  body: unknown,
): Promise<InviteResult<{ status: "revoked" }>> {
  const token = readToken(body);
  const managementToken = readManagementToken(body);
  if (!token || !managementToken) return fail("INVALID_REQUEST");

  const now = (context.now ?? (() => new Date()))();
  const record = await findBy(context, token, (hash) => context.store.findByURLTokenHash(hash));
  if (!record) return fail("INVITE_UNAVAILABLE");

  // Holding the invitation is not the same as owning it: revoking takes the
  // management token, which only the device that created the invitation ever
  // had. Otherwise anybody the link reached could close it behind them.
  const presented = await lookupHashes(context.keys, managementToken);
  if (!presented.some((hash) => hashesMatch(hash, record.managementTokenHash))) {
    return fail("INVITE_UNAVAILABLE");
  }

  if (record.status === "active") await context.store.revoke(record.id, now.toISOString());
  await context.record?.("revoked");
  return succeed({ status: "revoked" });
}

/**
 * Only an iCloud share link is worth storing.
 *
 * This service takes a URL and hands it back later to whoever holds the token,
 * so without this it would be an open redirect service with an expiry — and
 * one that Remeet's own name vouches for.
 */
function readShareURL(body: unknown): string | null {
  const value = (body as { ckShareUrl?: unknown } | null)?.ckShareUrl;
  if (typeof value !== "string" || value.length > 2048) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  const host = url.hostname.toLowerCase();
  if (host !== "www.icloud.com" && host !== "icloud.com") return null;
  if (!url.pathname.startsWith("/share/")) return null;
  return url.toString();
}

function readToken(body: unknown): string | null {
  const value = (body as { token?: unknown } | null)?.token;
  return isWellFormedToken(value) ? value : null;
}

function readManagementToken(body: unknown): string | null {
  const value = (body as { managementToken?: unknown } | null)?.managementToken;
  return isWellFormedToken(value) ? value : null;
}

function isUsable(record: InviteRecord | null, now: Date): record is InviteRecord {
  return !!record && record.status === "active" && new Date(record.expiresAt) > now;
}
