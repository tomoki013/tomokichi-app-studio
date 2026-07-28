import type { SupportCategory, SupportEmail, SupportRequest } from "./types";

const categoryLabels: Record<SupportCategory, string> = {
  question: "質問",
  bug: "不具合",
  feature: "機能要望",
  other: "その他",
};

const appLabels = {
  remeet: "Remeet",
  colorvia: "Colorvia",
  other: "Other",
} as const;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function createSupportEmail(
  request: SupportRequest,
  config: { from: string; to: string },
): SupportEmail {
  const category = categoryLabels[request.category];
  const rows: Array<[string, string]> = [
    ["受付ID", request.requestId],
    ["送信日時", request.submittedAt],
    ["送信元", request.source],
    ["アプリ", request.app],
    ["カテゴリ", category],
    ["名前", request.name ?? "（未入力）"],
    ["メールアドレス", request.email],
    ["問い合わせ内容", request.message],
    ["アプリバージョン", request.appVersion ?? "（未入力）"],
    ["ビルド番号", request.buildNumber ?? "（未入力）"],
    ["OS", request.osVersion ?? "（未入力）"],
    ["言語", request.locale ?? "（未入力）"],
  ];
  const text = rows.map(([label, value]) => `${label}\n${value}`).join("\n\n");
  const html = `<table>${rows
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;vertical-align:top;padding:8px">${escapeHtml(label)}</th><td style="padding:8px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  return {
    from: config.from,
    to: config.to,
    replyTo: request.email,
    subject: `[${appLabels[request.app]}][${category}] お問い合わせ`,
    text,
    html,
    idempotencyKey: `support-${request.requestId}`,
  };
}
