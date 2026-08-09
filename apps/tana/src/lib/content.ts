export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "pricing"
  | "faq"
  | "privacy"
  | "terms"
  | "news"
  | "updates";

export const pick = <T>(ja: boolean, pair: [T, T]): T => pair[ja ? 0 : 1];

export const titles: Record<Page, [string, string]> = {
  features: ["機能", "Features"],
  "how-to": ["使い方", "How to"],
  screenshots: ["コンセプト", "Concept"],
  pricing: ["料金", "Pricing"],
  faq: ["よくある質問", "FAQ"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Use"],
  news: ["読みもの / ブログ", "Reading / Blog"],
  updates: ["アップデート情報", "App updates"],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "本棚・探す・記録・コレクション・マイページ。Tanaの読書管理機能をご紹介します。",
    "Explore Tana’s shelves, discovery, logs, collections, and reading stats.",
  ],
  "how-to": [
    "本の登録から進捗、記録、コレクションまで、Tanaの使い方を解説します。",
    "Learn how to register books, track progress, log reading, and build collections.",
  ],
  screenshots: [
    "紙の香りと木の本棚のような、Tanaの考え方をご紹介します。",
    "The idea behind Tana: a quiet wooden bookshelf for the books you own and read.",
  ],
  pricing: [
    "Tanaの基本機能はすべて無料。買い切りの広告削除について。",
    "Every core feature is free. About the one-time ad-removal purchase.",
  ],
  faq: [
    "Tanaの使い方、データ、通知、広告、課金についてのよくある質問。",
    "FAQ about Tana: shelves, data, notifications, ads, and purchases.",
  ],
  privacy: [
    "Tanaのプライバシーポリシー。端末内保存、Google Mobile Ads、通知、課金について。",
    "Tana Privacy Policy: on-device storage, Google Mobile Ads, notifications, and IAP.",
  ],
  terms: [
    "Tanaの利用規約。無料機能、広告、広告削除のアプリ内課金、データの管理について。",
    "Tana Terms of Use covering free features, ads, the ad-removal purchase, and data.",
  ],
  news: [
    "Tanaからのお知らせと、本棚のある暮らしについてのコラム。",
    "News from Tana and columns about living with a bookshelf.",
  ],
  updates: [
    "Tanaアプリのバージョンごとの変更内容をお知らせします。",
    "Version-by-version release notes for the Tana app.",
  ],
};

/** Eleven languages (product fact). */
export const languagesJa =
  "日本語、英語、ドイツ語、スペイン語、フランス語、イタリア語、韓国語、ポルトガル語（ブラジル）、ロシア語、中国語（簡体字）、中国語（繁体字）";
export const languagesEn =
  "Japanese, English, German, Spanish, French, Italian, Korean, Portuguese (Brazil), Russian, Simplified Chinese, Traditional Chinese";

export const EFFECTIVE_DATE: [string, string] = ["2026年8月8日", "August 8, 2026"];
export const LAST_UPDATED: [string, string] = ["2026年8月8日", "August 8, 2026"];

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供するiOSアプリケーション「Tana」（以下「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とし、本アプリ内からはWebサイトを参照します。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
        ],
        [
          "2. 運営者",
          "運営者：Tomokichi（個人開発者）\nお問い合わせ：アプリ内お問い合わせフォーム、または https://tmkch.io の共通サポートフォーム\nメール：support@tmkch.io",
        ],
        [
          "3. 端末内に保存する情報",
          "本アプリはローカルファースト設計です。次の情報を利用者の端末内（SwiftData等）に保存します。\n\n・本・シリーズの登録情報（タイトル、著者、レーベル、巻数など）\n・評価、タグ、メモ、カバー画像（写真または自動生成）\n・ページ単位または巻単位の読書進捗\n・読書記録（ログ）および連続記録（ストリーク）\n・コレクション\n・期間統計・月次チャートに用いる集計用データ\n・所持状態（紙／電子／両方／読むだけ／未所持）および欠巻検出に関する情報\n・読書リマインダーなど通知のオン／オフと時刻\n・外観その他のローカル設定\n・サポート用のランダムなクライアントID\n・その他、アプリの動作に必要なローカル設定\n\nアカウント登録は不要です。通常のアプリ利用だけでは、本の内容・メモ・記録は運営者のサーバーへ送信されません。",
        ],
        [
          "4. データの書き出し・読み込み",
          "利用者は、設定などから読書データをJSON形式でバックアップ（書き出し）し、別の端末または再インストール後のTanaへ読み込むことができます。\n\n書き出したファイルは利用者自身が管理し、第三者への共有、紛失、改変等について運営者は管理できません。不正または破損したJSON、将来の仕様変更後の互換性を完全には保証しません。",
        ],
        [
          "5. 広告",
          "本アプリは広告表示のためGoogle Mobile Ads SDKを使用します。無料版では、画面にバナー広告が表示される場合があります。また、本の登録や読書ログなど一定の操作を3回行うごとにインタースティシャル広告が表示される場合があり、連続表示を抑えるためのクールダウンがあります。\n\n広告配信事業者（Googleおよび広告配信パートナー）は、広告の配信、効果測定、不正防止等のため、端末情報、IPアドレス、IPアドレスから推定されるおおよその地域、広告識別子、広告への反応、広告の表示・クリック情報、診断情報、同意状況、プライバシー選択などを取り扱う場合があります。取扱いはGoogleのプライバシーポリシーおよび利用者の同意設定に従います。\n\n運営者は、本棚の内容・メモ・読書記録や、問い合わせで入力された氏名・メールアドレスを、広告目的で広告配信事業者へ提供しません。",
        ],
        [
          "6. 広告の同意とプライバシー設定",
          "本アプリは同意管理のためGoogle User Messaging Platform（UMP）を使用します。地域や法令に応じて同意画面が表示される場合があります。また、App Tracking Transparency（ATT）のシステム画面を表示し、他社のアプリやWebサイトをまたぐ広告の最適化・効果測定に広告識別子を利用してよいか確認する場合があります。ATTを許可しない場合も、広告識別子を利用しない広告が表示される場合があります。\n\nATTの許可はiOSの「設定」から変更できます。必要な地域では、アプリの設定画面から広告プライバシー設定を再度表示できる場合があります。同意取得に失敗した場合、その起動中は広告を要求しない設計とする場合があります。「広告を永久に削除」を購入済みの場合は広告配信の対象外となり、原則としてATTを要求せず、広告SDKも起動しません。",
        ],
        [
          "7. アプリ内課金",
          "非消耗型の一回払い商品「広告を永久に削除」（¥400・税込を予定。実際の価格はApp Storeの商品ページおよびアプリ内の購入画面に表示される税込価格が正しいものとします）は、AppleのStoreKitを通じて処理されます。Appleが決済を処理し、運営者はクレジットカード情報を取得しません。アプリが確認するのは広告削除に必要な購入権利のみです。購入履歴、返金、Apple Account情報はAppleが管理します。購入復元に対応しています。サブスクリプションではありません。",
        ],
        [
          "8. 通知",
          "利用者が許可した場合に限り、端末上のローカル通知を利用して読書リマインダーを届けます。通知のために本棚の内容を外部サーバーへ送信しません。許可はiOSの設定から変更できます。",
        ],
        [
          "9. お問い合わせ",
          "アプリ内または公式サポートフォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・カテゴリ、名前、メールアドレス、件名、本文\n・アプリバージョン、ビルド番号、OS名・OSバージョン、ロケール\n・送信日時、問い合わせID、ランダムなクライアントID、送信元、対象アプリ\n・不正送信防止・回数制限に必要な情報\n\n本棚・読書記録は自動添付されません。",
        ],
        [
          "10. 外部サービス",
          "本サービスは、提供に必要な範囲で次の外部サービスを利用します。\n\n・Apple（StoreKit、ローカル通知、システム機能）\n・Google Mobile Ads（広告配信）\n・Google User Messaging Platform（同意管理）\n・Cloudflare Workers（お問い合わせAPIの実行基盤）\n・Resend（お問い合わせメール配送）\n・公式Webサイトの配信基盤\n\n各サービスの取扱いは、各事業者の方針に従います。",
        ],
        [
          "11. 法務文書の表示",
          "本アプリは、最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得して表示します。通信できない場合は、アプリ内に保存された参照用文書を表示します。Web版を正本として扱います。",
        ],
        [
          "12. 保存期間と削除",
          "本・記録・コレクションを削除すると、そのデータは端末内から削除されます。本アプリをアンインストールすると、端末内のデータは削除され、運営者が復旧することはできません。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。Appleが管理する購入記録はアプリ内から削除できません。広告事業者が扱う情報は各事業者の方針に従います。",
        ],
        [
          "13. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "14. 安全管理",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "15. 未成年者の利用",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "16. 改定",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "17. お問い合わせ",
          "本ポリシーに関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the iOS app “Tana” (the “App”) and the official brand website (together, the “Service”). The website is the authoritative version; the App refers to it. When offline, a bundled reference copy may be shown.",
        ],
        [
          "2. Operator",
          "Operator: Tomokichi (individual developer)\nContact: in-app support form, or the shared form at https://tmkch.io\nEmail: support@tmkch.io",
        ],
        [
          "3. Information stored on your device",
          "The App is local-first. It stores the following on your device (including via SwiftData):\n\n・Book and series registrations (title, author, imprint, volume count, and similar)\n・Ratings, tags, notes, and cover images (photos or auto-generated)\n・Reading progress by page or by volume\n・Reading logs and streaks\n・Collections\n・Data used for period statistics and monthly charts\n・Ownership state (paper / digital / both / read-only / unowned) and missing-volume detection\n・Daily reading reminder on/off and time\n・Appearance and other local settings\n・A random client id for support rate limiting\n・Other local settings needed for the App to work\n\nNo account is required. During ordinary use, book contents, notes, and logs are not sent to the Operator’s servers.",
        ],
        [
          "4. Data export and import",
          "You can back up reading data as JSON and import it into Tana on another device or after reinstall.\n\nYou manage exported files yourself. The Operator cannot control sharing, loss, or alteration by others. Compatibility with invalid, corrupted, or future-format JSON is not fully guaranteed.",
        ],
        [
          "5. Advertising",
          "The App uses the Google Mobile Ads SDK. In the free version, banner ads may appear. Interstitial ads may also appear after every three book or log actions, with cooldowns to limit how often they show.\n\nGoogle and advertising partners may process information needed to deliver and measure ads and prevent fraud, such as device details, IP address, approximate region derived from IP, advertising identifiers, ad interactions, impression/click data, diagnostics, consent status, and privacy choices. Handling follows Google’s privacy policy and your consent choices.\n\nThe Operator does not provide shelf contents, notes, reading logs, or support-form names/emails to advertising providers for advertising purposes.",
        ],
        [
          "6. Consent and privacy settings",
          "The App uses Google’s User Messaging Platform (UMP) for consent. A consent form may appear depending on region and law. The App may also present Apple’s App Tracking Transparency (ATT) prompt before an advertising identifier may be used to personalize or measure ads across other companies’ apps and websites. If you decline ATT, ads may still appear without access to that identifier.\n\nYou can change ATT permission in iOS Settings. Where required, advertising privacy choices may be reopened from the App’s Settings. If consent cannot be resolved, the App may not request ads for that launch. After purchasing “Remove ads permanently”, you are not ad-supported; the App generally does not request ATT or start the ads SDK.",
        ],
        [
          "7. In-app purchases",
          "The non-consumable one-time product “Remove ads permanently” (intended price ¥400, tax included; the tax-inclusive price shown on the App Store product page and the in-app purchase screen is authoritative) is processed through Apple’s StoreKit. Apple handles payment; the Operator never receives card details. The App only checks the entitlement needed to remove ads. Purchase history, refunds, and Apple Account data are managed by Apple. Restore purchases is supported. This is not a subscription.",
        ],
        [
          "8. Notifications",
          "Local notifications are used only with your permission to deliver a daily reading reminder. Shelf contents are not sent to an external server for notifications. You can change permission in iOS Settings.",
        ],
        [
          "9. Support",
          "Only when you explicitly submit the in-app or shared support form may the following be sent to the support API and email delivery provider:\n\n・Category, name, email, subject, message\n・App version, build number, OS name/version, locale\n・Submission time, enquiry id, random client id, source, target app\n・Details needed to prevent abuse and rate-limit submissions\n\nShelf and reading records are never attached automatically.",
        ],
        [
          "10. Service providers",
          "The Service uses, where needed:\n\n・Apple (StoreKit, local notifications, system features)\n・Google Mobile Ads\n・Google User Messaging Platform\n・Cloudflare Workers (support API)\n・Resend (support email delivery)\n・Website hosting infrastructure\n\nEach provider processes information under its own policies.",
        ],
        [
          "11. Display of legal documents",
          "The App loads the latest Privacy Policy and Terms from the official website. When offline, a bundled reference copy is shown. The website version is authoritative.",
        ],
        [
          "12. Retention and deletion",
          "Deleting books, logs, or collections removes them from the device. Uninstalling the App deletes on-device data; the Operator cannot recover it. Support information is kept as needed for response, law, security, and abuse prevention. Apple-managed purchase records cannot be deleted from the App. Information handled by advertising providers follows their policies.",
        ],
        [
          "13. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information to third parties. Processing by service providers is limited to what the Service needs, as described in this policy.",
        ],
        [
          "14. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS security mechanisms.",
        ],
        [
          "15. Minors",
          "If a minor uses the App, please do so with a parent or guardian’s consent.",
        ],
        [
          "16. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and are announced on the website or in the App.",
        ],
        [
          "17. Contact",
          "Questions about this policy: in-app support, the shared support form, or support@tmkch.io.",
        ],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリ「Tana」および公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Tanaは、本棚にある本やシリーズを登録し、進捗・記録・コレクション・統計で読書を静かに整理するためのiPhoneアプリです。主な画面は本棚、探す、記録、コレクション、マイページです。基本機能は無料で、アカウント登録は不要です。データは端末内に保存されます。",
        ],
        [
          "第3条（広告）",
          "本アプリは広告を掲載することがあります。無料版ではバナー広告が表示される場合があり、本の登録や読書ログなど一定の操作を3回行うごとにインタースティシャル広告が表示される場合があり、クールダウンにより連続表示を抑えます。広告は操作を大きく妨げないことを目指していますが、常に完全な非干渉を保証するものではありません。広告配信には外部事業者（Google Mobile Ads）を利用し、広告の内容および表示順は運営者が個別に選定するものではありません。第4条の「広告を永久に削除」を購入した場合、広告は表示されません。",
        ],
        [
          "第4条（アプリ内課金）",
          "本アプリは、非消耗型の一回払い商品「広告を永久に削除」（¥400・税込を予定）を提供します。購入すると、開発への応援のお礼として広告が永久に表示されなくなります。基本機能が追加されるものではなく、サブスクリプションでも、有効期限のある商品でもありません。\n\n同じApple Accountを利用している場合、設定画面から購入を復元できます。購入・復元・返金はAppleの条件に従い、返金の可否および手続きはAppleが判断します。価格は、App Storeの商品ページおよびアプリ内の購入画面に表示される税込価格が正しいものとします。",
        ],
        [
          "第5条（利用許諾）",
          "運営者は、本規約に従うことを条件として、本アプリを個人的・非独占的・譲渡不能な範囲で利用する権利を許諾します。",
        ],
        [
          "第6条（禁止事項）",
          "利用者は、次の行為をしてはなりません。\n\n1. 法令または公序良俗に違反する行為\n2. 不正アクセス、運営妨害、システムの脆弱性を悪用する行為\n3. 不正な課金回避、購入権利の偽装\n4. 不正な広告操作（不正クリック等）\n5. 違法な複製・再配布\n6. 法令で許されないリバースエンジニアリング\n7. サポートフォームの荒らし、迷惑行為\n8. その他、運営者が不適切と合理的に判断する行為",
        ],
        [
          "第7条（データ）",
          "読書データは端末内に保存されます。JSONによるバックアップ（書き出し・読み込み）に対応します。Tana独自のクラウド同期や端末間の自動同期はありません。利用者は端末および書き出したファイルを自己の責任で管理してください。アプリ削除、端末故障、紛失、OSの問題等により記録が失われる場合があり、運営者は失われたデータを復旧できません。",
        ],
        [
          "第8条（通知）",
          "読書リマインダーは補助機能であり、配信を保証するものではありません。重要な予定管理やアラーム用途に依存しないでください。OS設定、端末状態、省電力、通知許可等により届かない場合があります。",
        ],
        [
          "第9条（保証の否認）",
          "本サービスは現状有姿で提供されます。運営者は、完全性、正確性、継続性、無停止、無欠陥を保証しません。消費者契約法その他の強行法規により制限される場合を除き、この否認が適用されます。",
        ],
        [
          "第10条（責任制限）",
          "運営者の故意または重過失による場合を除き、法令で認められる範囲で、本サービスの利用または利用不能により生じた損害について責任を負いません。消費者契約法その他の強行法規により免責が認められない場合、責任は法令上認められる範囲に限定されます。",
        ],
        [
          "第11条（変更・中断・終了）",
          "運営者は、OS対応、法令、広告、課金、保守、セキュリティ等の理由により、本サービスの内容を変更し、または提供を中断・終了することがあります。",
        ],
        [
          "第12条（規約変更）",
          "運営者は本規約を変更することがあります。変更後の規約は、本アプリまたは公式サイトに掲載された時点から効力を生じます。",
        ],
        [
          "第13条（準拠法・管轄）",
          "本規約は日本法に準拠します。本サービスに関する紛争については、消費者契約法その他の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第14条（お問い合わせ）",
          "本規約に関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the iOS app “Tana” and the official brand website (together, the “Service”) provided by Tomokichi (the “Operator”). By downloading the App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "Tana is an iPhone app for quietly organising books and series on your shelf—with progress, logs, collections, and stats. Main tabs are Shelf, Discover, Log, Collections, and My Page. Core features are free, no account is required, and data stays on your device.",
        ],
        [
          "Article 3 — Advertising",
          "The App may show advertising. In the free version, banner ads may appear. Interstitial ads may appear after every three book or log actions, with cooldowns to limit frequency. Ads are intended to stay unobtrusive, but complete non-interference is not guaranteed. Advertising uses an external provider (Google Mobile Ads), and the Operator does not individually select which ads appear or in what order. Ads do not appear after the “Remove ads permanently” purchase described in Article 4.",
        ],
        [
          "Article 4 — In-app purchase",
          "The App offers one non-consumable, one-time product: “Remove ads permanently” (intended price ¥400, tax included). Buying it permanently stops ads as a thank-you for supporting development. It does not unlock extra core features, and it is neither a subscription nor a product that expires.\n\nOn the same Apple Account, the purchase can be restored from Settings. Purchases, restores, and refunds follow Apple’s terms, and Apple decides whether a refund is granted. The tax-inclusive price shown on the App Store product page and the in-app purchase screen is authoritative.",
        ],
        [
          "Article 5 — License",
          "Subject to these Terms, the Operator grants a personal, non-exclusive, non-transferable right to use the App.",
        ],
        [
          "Article 6 — Prohibited conduct",
          "You must not:\n\n1. Violate law or public order\n2. Gain unauthorized access, disrupt operations, or abuse system vulnerabilities\n3. Evade payment or forge purchase entitlements\n4. Manipulate ads fraudulently (including invalid clicks)\n5. Unlawfully copy or redistribute the App\n6. Reverse-engineer where not permitted by law\n7. Abuse the support form or harass others\n8. Engage in any other conduct the Operator reasonably finds inappropriate",
        ],
        [
          "Article 7 — Data",
          "Reading data is stored on your device. JSON backup (export and import) is supported. There is no Tana cloud sync or automatic device-to-device sync. You manage your own device and exported files. Records may be lost if you delete the App, lose or damage the device, or face OS issues; the Operator cannot restore lost data.",
        ],
        [
          "Article 8 — Notifications",
          "Reading reminders are an aid only and delivery is not guaranteed. Do not rely on them as a critical planner or alarm. OS settings, device state, power saving, and permission may prevent delivery.",
        ],
        [
          "Article 9 — Disclaimer",
          "The Service is provided “as is.” The Operator does not warrant completeness, accuracy, continuity, uptime, or freedom from defects, except where mandatory law such as the Consumer Contract Act limits this disclaimer.",
        ],
        [
          "Article 10 — Limitation of liability",
          "Except for willful misconduct or gross negligence, and to the extent permitted by law, the Operator is not liable for damages from use or inability to use the Service. Where mandatory law disallows full exclusion, liability is limited to what the law allows.",
        ],
        [
          "Article 11 — Changes, suspension, termination",
          "The Operator may change, suspend, or end the Service for OS support, law, ads, purchases, maintenance, security, or similar reasons.",
        ],
        [
          "Article 12 — Changes to these Terms",
          "These Terms may be revised. Revised Terms take effect when posted in the App or on the official website.",
        ],
        [
          "Article 13 — Governing law and jurisdiction",
          "These Terms are governed by Japanese law. Unless mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        [
          "Article 14 — Contact",
          "Questions: in-app support, the shared support form, or support@tmkch.io.",
        ],
      ];
}
