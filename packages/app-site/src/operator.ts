/**
 * Seller identity shared by every brand site's Commercial Transactions page.
 *
 * 特定商取引法 requires the operator's name, address and a telephone number that
 * actually reaches them, so these are stated outright rather than deferred to a
 * disclosure-on-request notice. Keeping them here means one edit updates every
 * site — never copy the literals into an app.
 */
export const OPERATOR = {
  /** Trading name shown as the seller. */
  seller: ["Tomokichi Studio", "Tomokichi Studio"] as [string, string],
  /** Legal name of the person responsible for the business. */
  responsible: ["髙木 友喜", "Yuki Takagi"] as [string, string],
  /** Registered address, Japanese then English order. */
  address: [
    "〒171-0044 東京都豊島区千早2丁目6-11",
    "2-6-11 Chihaya, Toshima-ku, Tokyo 171-0044, Japan",
  ] as [string, string],
  /** Contact telephone number, formatted for each locale. */
  telephone: ["080-6648-1475", "+81 80-6648-1475"] as [string, string],
  /** `tel:` target for the number above. */
  telephoneHref: "tel:+818066481475",
  /** Support mailbox used across every brand. */
  email: "support@tmkch.io",
} as const;
