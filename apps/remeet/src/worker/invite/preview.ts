/**
 * What the landing page is allowed to know about an invitation.
 *
 * The site asks `api.tmkch.io` and gets back a code and an expiry — never a
 * CKShare URL. That is not a convention this file follows politely; it is the
 * only thing the `preview` endpoint can return. A browser is the last place a
 * CloudKit share entrance should ever appear, and keeping the resolving
 * endpoint out of reach of the web is why the two exist separately.
 */
export interface InvitePreview {
  inviteCode: string;
  expiresAt: string;
}

export async function fetchInvitePreview(
  apiOrigin: string | undefined,
  token: string,
  clientKey?: string,
): Promise<InvitePreview | null> {
  if (!apiOrigin) return null;
  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (clientKey) headers["X-Remeet-Client"] = clientKey;
    const response = await fetch(`${apiOrigin.replace(/\/$/, "")}/remeet/v1/invites/preview`, {
      method: "POST",
      headers,
      body: JSON.stringify({ token }),
    });
    if (!response.ok) return null;
    const payload = (await response.json()) as Partial<InvitePreview>;
    if (typeof payload.inviteCode !== "string" || typeof payload.expiresAt !== "string") return null;
    return { inviteCode: payload.inviteCode, expiresAt: payload.expiresAt };
  } catch {
    // An invitation page that cannot reach the API still has something worth
    // saying: where to get Remeet, and to open the link again afterwards.
    return null;
  }
}

/**
 * Length and alphabet only, before the token is worth a round trip. Whether it
 * is a real invitation is the API's answer to give, and it gives the same one
 * for "never existed" as for "expired".
 */
export function isWellFormedToken(value: string): boolean {
  return /^[A-Za-z0-9_-]{16,128}$/.test(value);
}
