/**
 * The two opaque strings an invitation is made of.
 *
 * Neither is meant to be typed by a person — the URL token travels inside a
 * link, and the management token never leaves the inviting device. The
 * human-readable invite code is a separate thing entirely and arrives in
 * Phase 3; it is not generated here, and deliberately not stored as a
 * shortened form of either of these.
 */

/** 160 bits, comfortably past the 128-bit floor the design sets. */
const URL_TOKEN_BYTES = 20;
/** The management token guards revocation, so it gets the wider margin. */
const MANAGEMENT_TOKEN_BYTES = 32;

export function generateURLToken(): string {
  return randomBase64URL(URL_TOKEN_BYTES);
}

export function generateManagementToken(): string {
  return randomBase64URL(MANAGEMENT_TOKEN_BYTES);
}

/**
 * What a token has to look like before it is worth a database round trip.
 *
 * Length and alphabet only. Anything that passes this is still just a
 * candidate — the answer comes from the lookup, and is the same "unavailable"
 * whether the token was never issued, has expired, or was revoked.
 */
export function isWellFormedToken(value: unknown): value is string {
  return typeof value === "string" && /^[A-Za-z0-9_-]{16,128}$/.test(value);
}

function randomBase64URL(byteLength: number): string {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return base64URLEncode(bytes);
}

export function base64URLEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * Returns a view over a plain `ArrayBuffer` — not the `ArrayBufferLike` a bare
 * `new Uint8Array(length)` is typed as — because Web Crypto's `BufferSource`
 * will not accept anything that might be shared memory.
 */
export function base64URLDecode(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded.padEnd(Math.ceil(padded.length / 4) * 4, "="));
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
