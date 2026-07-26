import type { EmailDeliveryResult, SupportEmail } from "./types";

export async function sendSupportEmail(
  email: SupportEmail,
  apiKey: string,
  fetcher: typeof fetch = fetch,
): Promise<EmailDeliveryResult> {
  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": email.idempotencyKey,
    },
    body: JSON.stringify({
      from: email.from,
      to: [email.to],
      reply_to: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  });

  if (!response.ok) throw new Error(`Resend request failed with status ${response.status}`);
  const result: unknown = await response.json();
  if (
    !result ||
    typeof result !== "object" ||
    typeof (result as { id?: unknown }).id !== "string"
  ) {
    throw new Error("Resend response did not include an email ID");
  }
  return { id: (result as { id: string }).id };
}
