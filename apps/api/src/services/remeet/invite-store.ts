import type { D1Database } from "./types";

export interface InviteRecord {
  id: string;
  urlTokenHash: string;
  inviteCodeHash: string;
  shareURLHash: string;
  encryptedShareURL: string;
  encryptedInviteCode: string;
  managementTokenHash: string;
  status: "active" | "revoked";
  createdAt: string;
  expiresAt: string;
  revokedAt: string | null;
}

/**
 * Everything the invite API does to storage, named rather than spelled in SQL
 * at each call site. The D1 implementation below is the only place the schema
 * appears; the tests drive an in-memory one through the same four methods.
 */
export interface InviteStore {
  insert(record: InviteRecord): Promise<void>;
  findByURLTokenHash(hash: string): Promise<InviteRecord | null>;
  findByInviteCodeHash(hash: string): Promise<InviteRecord | null>;
  revoke(id: string, revokedAt: string): Promise<void>;
  /** Used when a fresh invitation supersedes the invitations before it. */
  revokeActiveForShare(shareURLHash: string, revokedAt: string): Promise<void>;
  /**
   * Drops invitations that are long past their expiry.
   *
   * An invitation is useless the moment it expires, and keeping it is the only
   * thing that makes spamming the create endpoint worth anything: without this
   * the table grows forever, with it the cost of junk is a week.
   */
  deleteExpiredBefore(cutoff: string): Promise<void>;
  /** Adds one to the day's tally for an outcome. See `0003_invite_metrics`. */
  countOutcome(day: string, outcome: string): Promise<void>;
}

interface InviteRow {
  id: string;
  url_token_hash: string;
  invite_code_hash: string;
  share_url_hash: string;
  encrypted_share_url: string;
  encrypted_invite_code: string | null;
  management_token_hash: string;
  status: string;
  created_at: string;
  expires_at: string;
  revoked_at: string | null;
}

export class D1InviteStore implements InviteStore {
  constructor(private readonly database: D1Database) {}

  async insert(record: InviteRecord): Promise<void> {
    await this.database
      .prepare(
        `INSERT INTO invites (
           id, url_token_hash, invite_code_hash, share_url_hash, encrypted_share_url,
           encrypted_invite_code, management_token_hash, status, created_at, expires_at, revoked_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
      )
      .bind(
        record.id,
        record.urlTokenHash,
        record.inviteCodeHash,
        record.shareURLHash,
        record.encryptedShareURL,
        record.encryptedInviteCode,
        record.managementTokenHash,
        record.status,
        record.createdAt,
        record.expiresAt,
      )
      .run();
  }

  async findByURLTokenHash(hash: string): Promise<InviteRecord | null> {
    const row = await this.database
      .prepare("SELECT * FROM invites WHERE url_token_hash = ? LIMIT 1")
      .bind(hash)
      .first<InviteRow>();
    return row ? toRecord(row) : null;
  }

  async findByInviteCodeHash(hash: string): Promise<InviteRecord | null> {
    const row = await this.database
      .prepare("SELECT * FROM invites WHERE invite_code_hash = ? LIMIT 1")
      .bind(hash)
      .first<InviteRow>();
    return row ? toRecord(row) : null;
  }

  async revoke(id: string, revokedAt: string): Promise<void> {
    await this.database
      .prepare("UPDATE invites SET status = 'revoked', revoked_at = ? WHERE id = ?")
      .bind(revokedAt, id)
      .run();
  }

  async revokeActiveForShare(shareURLHash: string, revokedAt: string): Promise<void> {
    await this.database
      .prepare(
        "UPDATE invites SET status = 'revoked', revoked_at = ? WHERE share_url_hash = ? AND status = 'active'",
      )
      .bind(revokedAt, shareURLHash)
      .run();
  }

  async deleteExpiredBefore(cutoff: string): Promise<void> {
    await this.database.prepare("DELETE FROM invites WHERE expires_at < ?").bind(cutoff).run();
  }

  async countOutcome(day: string, outcome: string): Promise<void> {
    await this.database
      .prepare(
        `INSERT INTO invite_metrics (day, outcome, count) VALUES (?, ?, 1)
         ON CONFLICT(day, outcome) DO UPDATE SET count = count + 1`,
      )
      .bind(day, outcome)
      .run();
  }
}

function toRecord(row: InviteRow): InviteRecord {
  return {
    id: row.id,
    urlTokenHash: row.url_token_hash,
    inviteCodeHash: row.invite_code_hash,
    shareURLHash: row.share_url_hash,
    encryptedShareURL: row.encrypted_share_url,
    encryptedInviteCode: row.encrypted_invite_code ?? "",
    managementTokenHash: row.management_token_hash,
    status: row.status === "revoked" ? "revoked" : "active",
    createdAt: row.created_at,
    expiresAt: row.expires_at,
    revokedAt: row.revoked_at,
  };
}
