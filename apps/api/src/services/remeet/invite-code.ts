/**
 * The invitation as a person can read it out: `7KM4P-Q2X8N`.
 *
 * A second key to the same invitation, for the case the link cannot cover —
 * the link arrived on one device and Remeet is on another, or the message it
 * came in is no longer to hand. It is deliberately not derived from the URL
 * token: both are looked up by their own hash, and neither reveals the other.
 *
 * Crockford's base32 alphabet, which is chosen for exactly this job: no `I`,
 * `L`, `O` or `U`, so nothing collides with `1`, `0`, or with a word nobody
 * wants printed on their invitation. Ten characters is a shade over fifty
 * bits — far too few to stand on its own, which is why resolving a code is
 * the most tightly rate-limited thing this Worker does.
 */
const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const CODE_LENGTH = 10;

/** What a person is shown and asked to type back. */
export function generateInviteCode(): string {
  const bytes = new Uint8Array(CODE_LENGTH);
  crypto.getRandomValues(bytes);
  // Rejection-free because 256 is a whole multiple of 32: every byte maps to
  // exactly eight of the alphabet's characters, so no letter is likelier than
  // any other.
  return [...bytes].map((byte) => ALPHABET[byte % ALPHABET.length]).join("");
}

/** `7KM4PQ2X8N` → `7KM4P-Q2X8N`. Display only; the hyphen is never stored. */
export function formatInviteCode(code: string): string {
  const half = Math.ceil(code.length / 2);
  return `${code.slice(0, half)}-${code.slice(half)}`;
}

/**
 * Everything a person might type, reduced to the one form that gets hashed.
 *
 * Lower case, spaces, the hyphen we printed, and the three characters the
 * alphabet leaves out precisely because they get mistyped: `O` for zero, `I`
 * and `L` for one. Returns `null` for anything that still is not a code.
 */
export function normalizeInviteCode(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 64) return null;
  const normalized = value
    .toUpperCase()
    .replace(/[\s\-–—_]/g, "")
    .replace(/O/g, "0")
    .replace(/[IL]/g, "1");
  if (normalized.length !== CODE_LENGTH) return null;
  if (![...normalized].every((character) => ALPHABET.includes(character))) return null;
  return normalized;
}
