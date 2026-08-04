export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "pricing"
  | "faq"
  | "privacy"
  | "terms"
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
  updates: ["ニュース", "News"],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "Today・Week・Month、通知、端末内保存など、Yohakuの機能をご紹介します。",
    "Explore Yohaku’s Today, Week, Month views, notifications, and on-device storage.",
  ],
  "how-to": [
    "余白の作成から振り返り、通知、広告削除まで、Yohakuの使い方を解説します。",
    "Learn how to create space, review your day, week and month, and manage notifications.",
  ],
  screenshots: [
    "予定ではなく余白だけを置く、Yohakuの考え方をご紹介します。",
    "The idea behind Yohaku: leave space, not another plan.",
  ],
  pricing: [
    "Yohakuの基本機能はすべて無料。買い切りの広告削除について。",
    "Every core feature is free. About the one-time ad-removal purchase.",
  ],
  faq: [
    "Yohakuの使い方、通知、データ、広告、課金についてのよくある質問。",
    "FAQ about Yohaku: space, notifications, data, ads, and purchases.",
  ],
  privacy: [
    "Yohakuのプライバシーポリシー。端末内保存、Google Mobile Ads、問い合わせについて。",
    "Yohaku Privacy Policy: on-device storage, Google Mobile Ads, and support.",
  ],
  terms: [
    "Yohakuの利用規約。無料機能、広告、広告削除のアプリ内課金、データの管理について。",
    "Yohaku Terms of Use covering free features, ads, the ad-removal in-app purchase, and data.",
  ],
  updates: [
    "Yohaku公式ブランドサイト公開のお知らせ。",
    "News about the official Yohaku brand site launch.",
  ],
};

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供するiOSアプリケーション「Yohaku」（以下「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とし、本アプリ内からはWebサイトを参照します。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
        ],
        [
          "2. 運営者",
          "運営者：Tomokichi（個人開発者）\nお問い合わせ：アプリ内お問い合わせフォーム、または https://tmkch.io の共通サポートフォーム\nメール：support@tmkch.io",
        ],
        [
          "3. 端末内に保存する情報",
          "本アプリは、次の情報を利用者の端末内（SwiftData等）に保存します。\n\n・余白の名前、日付、開始時刻、終了時刻\n・作成日時、更新日時\n・任意の終了後回答と確認カードの表示状態\n・外観設定（システム／ライト／ダーク）\n・通知のオン／オフなどの設定\n・サポート用のランダムなクライアントID\n・その他、アプリの動作に必要なローカル設定\n\nアカウント登録は不要です。通常のアプリ利用だけでは、余白の内容や終了後回答は運営者のサーバーへ送信されません。",
        ],
        [
          "4. 広告",
          "本アプリは広告表示のためGoogle Mobile Ads SDKを使用します。本アプリは初回リリースより広告を掲載しており、無料版では、Today・Week・Monthなどの画面にアンカー型バナー広告が表示されます。\n\n広告配信事業者（Googleおよび広告配信パートナー）は、広告の配信、効果測定、不正防止等のため、端末情報、IPアドレス、IPアドレスから推定されるおおよその地域、広告識別子、広告への反応、広告の表示・クリック情報、診断情報、同意状況、プライバシー選択などを取り扱う場合があります。取扱いはGoogleのプライバシーポリシーおよび利用者の同意設定に従います。\n\n運営者は、余白の名前・日時や、問い合わせで入力された氏名・メールアドレスを、広告目的で広告配信事業者へ提供しません。",
        ],
        [
          "5. 広告の同意とプライバシー設定",
          "本アプリは同意管理のためGoogle User Messaging Platform（UMP）を使用します。地域や法令に応じて同意画面が表示される場合があります。また、App Tracking Transparency（ATT）のシステム画面を表示し、他社のアプリやWebサイトをまたぐ広告の最適化・効果測定に広告識別子を利用してよいか確認します。ATTを許可しない場合も、広告識別子を利用しない広告が表示される場合があります。\n\nATTの許可はiOSの「設定」から変更できます。必要な地域では、アプリの設定画面から広告プライバシー設定を再度表示できます。同意取得に失敗した場合、その起動中は広告を要求しない設計です。「広告を永久に削除」を購入済みの場合は広告配信の対象外となり、原則としてATTを要求せず、広告SDKも起動しません。",
        ],
        [
          "6. アプリ内課金",
          "非消耗型の一回払い商品「広告を永久に削除」（¥300・税込）は、AppleのStoreKitを通じて処理されます。Appleが決済を処理し、運営者はクレジットカード情報を取得しません。アプリが確認するのは広告削除に必要な購入権利のみです。購入履歴、返金、Apple Account情報はAppleが管理します。購入復元に対応しています。サブスクリプションではありません。",
        ],
        [
          "7. 通知",
          "利用者が許可した場合に限り、端末上のローカル通知を利用します。通知は通常、登録した余白の開始時刻の3〜7分前に表示されます。直前に作成された場合は、残り時間に応じて通知時刻を調整するか、開始に間に合わない通知を送らない場合があります。通知のために余白の内容を外部サーバーへ送信しません。許可はiOSの設定から変更できます。",
        ],
        [
          "8. お問い合わせ",
          "アプリ内または公式サポートフォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・カテゴリ、名前、メールアドレス、件名、本文\n・アプリバージョン、ビルド番号、OS名・OSバージョン、ロケール\n・送信日時、問い合わせID、ランダムなクライアントID、送信元、対象アプリ\n・不正送信防止・回数制限に必要な情報\n\n余白の記録は自動添付されません。",
        ],
        [
          "9. 外部サービス",
          "本サービスは、提供に必要な範囲で次の外部サービスを利用します。\n\n・Apple（StoreKit、ローカル通知、システム機能）\n・Google Mobile Ads（広告配信）\n・Google User Messaging Platform（同意管理）\n・Cloudflare Workers（お問い合わせAPIの実行基盤）\n・Resend（お問い合わせメール配送）\n・公式Webサイトの配信基盤\n\n各サービスの取扱いは、各事業者の方針に従います。",
        ],
        [
          "10. 法務文書の表示",
          "本アプリは、最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得して表示します。通信できない場合は、アプリ内に保存された参照用文書を表示します。Web版を正本として扱います。",
        ],
        [
          "11. 保存期間と削除",
          "余白を削除すると、その記録は端末内から削除されます。本アプリをアンインストールすると、端末内の余白データは削除され、運営者が復旧することはできません。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。Appleが管理する購入記録はアプリ内から削除できません。広告事業者が扱う情報は各事業者の方針に従います。",
        ],
        [
          "12. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "13. 安全管理",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "14. 未成年者の利用",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "15. 改定",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "16. お問い合わせ",
          "本ポリシーに関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the iOS app “Yohaku” (the “App”) and the official brand website (together, the “Service”). The website is the authoritative version; the App refers to it. When offline, a bundled reference copy may be shown.",
        ],
        [
          "2. Operator",
          "Operator: Tomokichi (individual developer)\nContact: in-app support form, or the shared form at https://tmkch.io\nEmail: support@tmkch.io",
        ],
        [
          "3. Information stored on your device",
          "The App stores the following on your device (including via SwiftData):\n\n・Space name, date, start time, end time\n・Created and updated timestamps\n・Optional post-space responses and check-in display state\n・Appearance setting (system / light / dark)\n・Notification on/off and related settings\n・A random client id for support rate limiting\n・Other local settings needed for the App to work\n\nNo account is required. During ordinary use, space contents and post-space responses are not sent to the Operator’s servers.",
        ],
        [
          "4. Advertising",
          "The App uses the Google Mobile Ads SDK. The App carries advertising from its first release: in the free version, an anchored banner ad appears on screens such as Today, Week and Month.\n\nGoogle and advertising partners may process information needed to deliver and measure ads and prevent fraud, such as device details, IP address, approximate region derived from IP, advertising identifiers, ad interactions, impression/click data, diagnostics, consent status and privacy choices. Handling follows Google’s privacy policy and your consent choices.\n\nThe Operator does not provide space names/times, or support-form names/emails, to advertising providers for advertising purposes.",
        ],
        [
          "5. Consent and privacy settings",
          "The App uses Google’s User Messaging Platform (UMP) for consent. A consent form may appear depending on region and law. The App also presents Apple’s App Tracking Transparency (ATT) prompt before an advertising identifier may be used to personalize or measure ads across other companies’ apps and websites. If you decline ATT, ads may still appear without access to that identifier.\n\nYou can change ATT permission in iOS Settings. Where required, advertising privacy choices can be reopened from the App’s Settings. If consent cannot be resolved, the App does not request ads for that launch. After purchasing “Remove ads permanently”, you are not ad-supported; the App generally does not request ATT or start the ads SDK.",
        ],
        [
          "6. In-app purchases",
          "The non-consumable one-time product “Remove ads permanently” (¥300, tax included) is processed through Apple’s StoreKit. Apple handles payment; the Operator never receives card details. The App only checks the entitlement needed to remove ads. Purchase history, refunds and Apple Account data are managed by Apple. Restore purchases is supported. This is not a subscription.",
        ],
        [
          "7. Notifications",
          "Local notifications are used only with your permission. They normally fire three to seven minutes before a space begins. For spaces created at short notice, timing may be adjusted based on the remaining time or skipped when a useful advance notice is no longer possible. Space contents are not sent to an external server for notifications. You can change permission in iOS Settings.",
        ],
        [
          "8. Support",
          "Only when you explicitly submit the in-app or shared support form may the following be sent to the support API and email delivery provider:\n\n・Category, name, email, subject, message\n・App version, build number, OS name/version, locale\n・Submission time, enquiry id, random client id, source, target app\n・Details needed to prevent abuse and rate-limit submissions\n\nSpace records are never attached automatically.",
        ],
        [
          "9. Service providers",
          "The Service uses, where needed:\n\n・Apple (StoreKit, local notifications, system features)\n・Google Mobile Ads\n・Google User Messaging Platform\n・Cloudflare Workers (support API)\n・Resend (support email delivery)\n・Website hosting infrastructure\n\nEach provider processes information under its own policies.",
        ],
        [
          "10. Display of legal documents",
          "The App loads the latest Privacy Policy and Terms from the official website. When offline, a bundled reference copy is shown. The website version is authoritative.",
        ],
        [
          "11. Retention and deletion",
          "Deleting a space removes it from the device. Uninstalling the App deletes on-device space data; the Operator cannot recover it. Support information is kept as needed for response, law, security and abuse prevention. Apple-managed purchase records cannot be deleted from the App. Information handled by advertising providers follows their policies.",
        ],
        [
          "12. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information to third parties. Processing by service providers is limited to what the Service needs, as described in this policy.",
        ],
        [
          "13. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS security mechanisms.",
        ],
        [
          "14. Minors",
          "If a minor uses the App, please do so with a parent or guardian’s consent.",
        ],
        [
          "15. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and are announced on the website or in the App.",
        ],
        [
          "16. Contact",
          "Questions about this policy: in-app support, the shared support form, or support@tmkch.io.",
        ],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリ「Yohaku」および公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Yohakuは、何もしない時間やゆっくり過ごしたい時間を、名前と日時で置いておくためのアプリです。Today・Week・Monthの画面で余白を確認できます。基本機能は無料で、アカウント登録は不要です。",
        ],
        [
          "第3条（広告）",
          "本アプリは初回リリースより広告を掲載しています。無料版では、Today・Week・Monthなどの画面にアンカー型バナー広告が表示されます。広告は操作を大きく妨げないことを目指していますが、常に完全な非干渉を保証するものではありません。広告配信には外部事業者（Google Mobile Ads）を利用し、広告の内容および表示順は運営者が個別に選定するものではありません。第4条の「広告を永久に削除」を購入した場合、広告は表示されません。",
        ],
        [
          "第4条（アプリ内課金）",
          "本アプリは、非消耗型の一回払い商品「広告を永久に削除」（¥300・税込）を提供します。購入すると、開発への応援のお礼として広告が永久に表示されなくなります。基本機能が追加されるものではなく、サブスクリプションでも、有効期限のある商品でもありません。\n\n同じApple Accountを利用している場合、設定画面から購入を復元できます。購入・復元・返金はAppleの条件に従い、返金の可否および手続きはAppleが判断します。価格は、App Storeの商品ページおよびアプリ内の購入画面に表示される税込価格が正しいものとします。",
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
          "余白の記録は端末内に保存されます。Yohaku独自のクラウド同期、端末間同期、データ書き出し・読み込み機能はありません。利用者は端末を自己の責任で管理してください。アプリ削除、端末故障、紛失、OSの問題等により記録が失われる場合があり、運営者は失われた余白を復旧できません。",
        ],
        [
          "第8条（通知）",
          "通知は補助機能であり、配信を保証するものではありません。重要な予定管理やアラーム用途に依存しないでください。OS設定、端末状態、省電力、通知許可等により届かない場合があります。",
        ],
        [
          "第9条（医療・健康上の免責）",
          "本アプリは医療機器ではなく、医療・心理・健康上の効果を保証しません。心身の不調がある場合は、適切な専門家へご相談ください。",
        ],
        [
          "第10条（保証の否認）",
          "本サービスは現状有姿で提供されます。運営者は、完全性、正確性、継続性、無停止、無欠陥を保証しません。消費者契約法その他の強行法規により制限される場合を除き、この否認が適用されます。",
        ],
        [
          "第11条（責任制限）",
          "運営者の故意または重過失による場合を除き、法令で認められる範囲で、本サービスの利用または利用不能により生じた損害について責任を負いません。消費者契約法その他の強行法規により免責が認められない場合、責任は法令上認められる範囲に限定されます。",
        ],
        [
          "第12条（変更・中断・終了）",
          "運営者は、OS対応、法令、広告、課金、保守、セキュリティ等の理由により、本サービスの内容を変更し、または提供を中断・終了することがあります。",
        ],
        [
          "第13条（規約変更）",
          "運営者は本規約を変更することがあります。変更後の規約は、本アプリまたは公式サイトに掲載された時点から効力を生じます。",
        ],
        [
          "第14条（準拠法・管轄）",
          "本規約は日本法に準拠します。本サービスに関する紛争については、消費者契約法その他の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第15条（お問い合わせ）",
          "本規約に関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the iOS app “Yohaku” and the official brand website (together, the “Service”) provided by Tomokichi (the “Operator”). By downloading the App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "Yohaku lets you leave time with nothing planned by giving it a name and times, then review those spaces on Today, Week and Month. Core features are free and no account is required.",
        ],
        [
          "Article 3 — Advertising",
          "The App carries advertising from its first release. In the free version, an anchored banner ad appears on screens such as Today, Week and Month. Ads are intended to stay unobtrusive, but complete non-interference is not guaranteed. Advertising uses an external provider (Google Mobile Ads), and the Operator does not individually select which ads appear or in what order. Ads do not appear after the “Remove ads permanently” purchase described in Article 4.",
        ],
        [
          "Article 4 — In-app purchase",
          "The App offers one non-consumable, one-time product: “Remove ads permanently” (¥300, tax included). Buying it permanently stops ads as a thank-you for supporting development. It does not unlock extra core features, and it is neither a subscription nor a product that expires.\n\nOn the same Apple Account, the purchase can be restored from Settings. Purchases, restores and refunds follow Apple’s terms, and Apple decides whether a refund is granted. The tax-inclusive price shown on the App Store product page and the in-app purchase screen is authoritative.",
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
          "Space records are stored on your device. There is no Yohaku cloud sync, device-to-device sync, export or import. You manage your own device. Records may be lost if you delete the App, lose or damage the device, or face OS issues; the Operator cannot restore lost spaces.",
        ],
        [
          "Article 8 — Notifications",
          "Notifications are an aid only and delivery is not guaranteed. Do not rely on them as a critical planner or alarm. OS settings, device state, power saving and permission may prevent delivery.",
        ],
        [
          "Article 9 — Medical disclaimer",
          "The App is not a medical device and does not guarantee medical, psychological or health outcomes. Seek qualified help if you have health concerns.",
        ],
        [
          "Article 10 — Disclaimer",
          "The Service is provided “as is.” The Operator does not warrant completeness, accuracy, continuity, uptime or freedom from defects, except where mandatory law such as the Consumer Contract Act limits this disclaimer.",
        ],
        [
          "Article 11 — Limitation of liability",
          "Except for willful misconduct or gross negligence, and to the extent permitted by law, the Operator is not liable for damages from use or inability to use the Service. Where mandatory law disallows full exclusion, liability is limited to what the law allows.",
        ],
        [
          "Article 12 — Changes, suspension, termination",
          "The Operator may change, suspend or end the Service for OS support, law, ads, purchases, maintenance, security or similar reasons.",
        ],
        [
          "Article 13 — Changes to these Terms",
          "These Terms may be revised. Revised Terms take effect when posted in the App or on the official website.",
        ],
        [
          "Article 14 — Governing law and jurisdiction",
          "These Terms are governed by Japanese law. Unless mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        [
          "Article 15 — Contact",
          "Questions: in-app support, the shared support form, or support@tmkch.io.",
        ],
      ];
}
