export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "faq"
  | "privacy"
  | "terms"
  | "updates"
  | "regions";

export const pick = <T>(ja: boolean, pair: [T, T]): T => pair[ja ? 0 : 1];

export const titles: Record<Page, [string, string]> = {
  features: ["機能", "Features"],
  "how-to": ["使い方", "How to use"],
  screenshots: ["スクリーンショット", "Screenshots"],
  faq: ["よくある質問", "FAQ"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Service"],
  updates: ["お知らせ", "News"],
  regions: ["国内地域マップ", "Regional maps"],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "世界地図、訪問統計、11か国の国内地域マップ、JSONバックアップなどColorviaの機能。",
    "Colorvia features: world map, visit stats, regional maps for 11 countries, and JSON backup.",
  ],
  "how-to": [
    "国の追加から国内地域の記録、データ移行まで、Colorviaの使い方。",
    "How to add countries, record regional visits, and move data with Colorvia.",
  ],
  screenshots: [
    "Colorviaの世界地図と統計画面のイメージ。",
    "Screens of Colorvia’s world map and statistics.",
  ],
  faq: [
    "国の記録、国内地域、JSONバックアップ、広告についてのFAQ。",
    "FAQ about visit tracking, regional maps, JSON backup, and ads.",
  ],
  privacy: [
    "Colorviaのプライバシーポリシー。端末内保存、JSON、Google Mobile Adsについて。",
    "Colorvia Privacy Policy covering on-device storage, JSON, and Google Mobile Ads.",
  ],
  terms: [
    "Colorviaの利用規約。無料提供、広告、データ管理について。",
    "Colorvia Terms of Service covering free use, ads, and data management.",
  ],
  updates: [
    "Colorvia公式ブランドサイト公開のお知らせ。",
    "News about the official Colorvia brand site launch.",
  ],
  regions: [
    "日本・フランスなど11か国で、都道府県や州など国内地域まで記録できます。",
    "Record prefectures, states and provinces in 11 supported countries.",
  ],
};

export type RegionCard = {
  code: string;
  nameJa: string;
  nameEn: string;
  unitJa: string;
  unitEn: string;
  count: number;
  flag: string;
};

/** Matches CountryRegionSchemeRegistry expectedRegionCount values. */
export const regions: RegionCard[] = [
  {
    code: "JP",
    nameJa: "日本",
    nameEn: "Japan",
    unitJa: "都道府県",
    unitEn: "Prefectures",
    count: 47,
    flag: "🇯🇵",
  },
  {
    code: "FR",
    nameJa: "フランス",
    nameEn: "France",
    unitJa: "県",
    unitEn: "Departments",
    count: 101,
    flag: "🇫🇷",
  },
  {
    code: "ES",
    nameJa: "スペイン",
    nameEn: "Spain",
    unitJa: "県・自治市",
    unitEn: "Provinces & autonomous cities",
    count: 52,
    flag: "🇪🇸",
  },
  {
    code: "KR",
    nameJa: "韓国",
    nameEn: "South Korea",
    unitJa: "特別市・広域市・道など",
    unitEn: "Regions",
    count: 17,
    flag: "🇰🇷",
  },
  {
    code: "EG",
    nameJa: "エジプト",
    nameEn: "Egypt",
    unitJa: "県",
    unitEn: "Governorates",
    count: 27,
    flag: "🇪🇬",
  },
  {
    code: "TH",
    nameJa: "タイ",
    nameEn: "Thailand",
    unitJa: "県・バンコク",
    unitEn: "Provinces & Bangkok",
    count: 77,
    flag: "🇹🇭",
  },
  {
    code: "TR",
    nameJa: "トルコ",
    nameEn: "Türkiye",
    unitJa: "県",
    unitEn: "Provinces",
    count: 81,
    flag: "🇹🇷",
  },
  {
    code: "US",
    nameJa: "アメリカ",
    nameEn: "United States",
    unitJa: "州・D.C.・領域",
    unitEn: "States, D.C. & territories",
    count: 56,
    flag: "🇺🇸",
  },
  {
    code: "MY",
    nameJa: "マレーシア",
    nameEn: "Malaysia",
    unitJa: "州・連邦直轄領",
    unitEn: "States & federal territories",
    count: 16,
    flag: "🇲🇾",
  },
  {
    code: "BE",
    nameJa: "ベルギー",
    nameEn: "Belgium",
    unitJa: "州・ブリュッセル",
    unitEn: "Provinces & Brussels",
    count: 11,
    flag: "🇧🇪",
  },
  {
    code: "SG",
    nameJa: "シンガポール",
    nameEn: "Singapore",
    unitJa: "旅行エリア",
    unitEn: "Travel areas",
    count: 8,
    flag: "🇸🇬",
  },
];

export const languagesJa =
  "日本語、英語、ドイツ語、スペイン語、フランス語、イタリア語、韓国語、ポルトガル語（ブラジル）、ロシア語、中国語（簡体字）、中国語（繁体字）";
export const languagesEn =
  "Japanese, English, German, Spanish, French, Italian, Korean, Portuguese (Brazil), Russian, Simplified Chinese, Traditional Chinese";

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供するiOSアプリケーション「Colorvia」（以下「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とし、本アプリ内からはWebサイトを参照します。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
        ],
        [
          "2. 運営者情報",
          "運営者：Tomokichi（個人開発者）\nお問い合わせ：アプリ内お問い合わせフォーム、または https://tmkch.io の共通サポートフォーム\nメール：support@tmkch.io",
        ],
        [
          "3. 適用範囲",
          "本ポリシーは、本アプリの利用および公式ブランドサイトの閲覧に適用されます。",
        ],
        [
          "4. 基本方針",
          "本アプリはアカウント登録を必要としません。訪問国および国内地域の記録は原則として利用者の端末内に保存されます。運営者は、通常のアプリ利用だけではこれらの記録内容を閲覧できるサーバーを運用していません。本アプリは広告表示のためGoogle Mobile Ads SDKを使用します。問い合わせフォームを明示的に送信した場合に限り、利用者が入力した情報と技術情報を送信します。",
        ],
        [
          "5. 端末内に保存する情報",
          "本アプリは、次の情報を端末内に保存します。\n\n・訪問国の状態および更新日時\n・国内地域の訪問状態および更新日時\n・オンボーディング完了状態\n・表示テーマ（システム／ライト／ダーク）\n・地図色\n・広告同意に関する状態（OSおよび広告SDKが端末上で保持する情報を含む）\n・問い合わせ用のランダムなクライアント識別子\n・その他、アプリの動作に必要なローカル設定",
        ],
        [
          "6. データの書き出し・読み込み",
          "利用者は、設定の「データ管理」から、訪問国および国内地域の記録をJSON形式で書き出し、別の端末または再インストール後のColorviaへ読み込むことができます。\n\n書き出したファイルは利用者自身が管理し、第三者への共有、紛失、改変等について運営者は管理できません。不正または破損したJSON、将来の仕様変更後の互換性を完全には保証しません。",
        ],
        [
          "7. 広告配信",
          "本アプリは広告表示のためGoogle Mobile Ads SDKおよび同意管理のためUser Messaging Platform（UMP）を使用します。\n\n・ホーム画面下部に固定サイズ（320×50）のバナー広告を表示する場合があります\n・画面高が700pt未満の端末では、地図操作領域を確保するため広告を表示しない場合があります\n・広告の取得に失敗した場合、空白の広告領域を残しません\n・インタースティシャル、リワード、アプリ起動、ネイティブ広告は使用しません\n・Firebase Analyticsは使用しません\n・App Tracking Transparency（ATT）プロンプトは使用しません\n・現在、広告削除のアプリ内課金は提供していません\n\n広告配信事業者は、広告の配信、効果測定、不正防止、同意管理のため、端末情報、IPアドレス、広告操作情報、診断情報、同意状況などを取り扱う場合があります。取扱いはGoogleのプライバシーポリシーおよび利用者の同意設定に従います。運営者は、訪問履歴、地図操作、検索語を広告目的で広告配信事業者へ提供しません。\n\n必要な地域ではUMPによる同意画面を表示し、設定に広告のプライバシー設定が表示される場合があります。",
        ],
        [
          "8. お問い合わせ",
          "アプリ内または公式サポートフォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・問い合わせID、ランダムなクライアントID、送信元、対象アプリ\n・カテゴリ、名前、メールアドレス、本文\n・アプリバージョン、ビルド番号、OS名、OSバージョン、ロケール、送信日時\n・不正利用防止に必要な情報\n\n訪問国や国内地域の記録は自動添付されません。",
        ],
        [
          "9. 法務文書の取得",
          "本アプリは、最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得して表示します。通信できない場合は、アプリに同梱した参照用文書を表示します。Web版を正本として扱います。",
        ],
        [
          "10. 外部サービス",
          "本サービスは、提供に必要な範囲で次を利用します。\n\n・Google Mobile Ads（広告配信）\n・Google User Messaging Platform（同意管理）\n・Cloudflare Workers（お問い合わせAPI）\n・Resend（お問い合わせメール配送）\n・Apple（システム機能）\n・公式Webサイトの配信基盤\n\n世界地図および国内地域の地理データは、Natural Earth等のオープンデータを基にアプリ内へ同梱しています。これらの同梱データ自体は、利用者情報を外部へ送信しません。",
        ],
        [
          "11. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "12. 保存期間と削除",
          "端末内の記録は、利用者が削除するまで保存されます。設定から個別またはすべてのデータを削除できます。本アプリをアンインストールすると端末内データは削除され、運営者が復旧することはできません。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。広告事業者が扱う情報は各事業者の方針に従います。",
        ],
        [
          "13. 安全管理措置",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "14. 未成年者",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "15. ポリシーの変更",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "16. お問い合わせ先",
          "本ポリシーに関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the iOS app “Colorvia” (the “App”) and the official brand website (together, the “Service”). The website is authoritative; the App refers to it. When offline, a bundled reference copy may be shown.",
        ],
        [
          "2. Operator",
          "Operator: Tomokichi (individual developer)\nContact: in-app support form, or the shared form at https://tmkch.io\nEmail: support@tmkch.io",
        ],
        [
          "3. Scope",
          "This policy applies to use of the App and browsing of the official brand website.",
        ],
        [
          "4. Basic policy",
          "The App does not require an account. Visited countries and regional records are stored on your device in principle. The Operator does not run a server that can view those records from ordinary use alone. The App uses the Google Mobile Ads SDK to show ads. Support details are sent only when you explicitly submit a support form.",
        ],
        [
          "5. Information stored on your device",
          "The App stores:\n\n・Visited-country state and update times\n・Regional visit state and update times\n・Onboarding completion\n・Appearance theme (system / light / dark)\n・Map color\n・Ad-consent related state (including values kept on device by the OS or ads SDK)\n・A random client identifier for support\n・Other local settings needed for the App",
        ],
        [
          "6. Data export and import",
          "From Settings → Data management you can export visited countries and regional records as JSON, and import them into Colorvia on another device or after reinstall.\n\nYou manage exported files yourself. The Operator cannot control sharing, loss or alteration by others. Compatibility with invalid, corrupted or future-format JSON is not fully guaranteed.",
        ],
        [
          "7. Advertising",
          "The App uses the Google Mobile Ads SDK and User Messaging Platform (UMP) for consent.\n\n・A fixed 320×50 banner may appear at the bottom of the home screen\n・On devices shorter than 700pt, ads may be hidden to protect map space\n・If an ad fails to load, no empty ad gap is left\n・No interstitial, rewarded, app-open or native ads\n・No Firebase Analytics\n・No App Tracking Transparency (ATT) prompt\n・No remove-ads in-app purchase is offered today\n\nAdvertising partners may process device information, IP address, ad interaction data, diagnostics and consent status for delivery, measurement, fraud prevention and consent. Handling follows Google’s policies and your choices. The Operator does not send visit history, map activity or search terms to ad partners for advertising.\n\nWhere required, UMP shows a consent form, and Settings may offer ad privacy choices.",
        ],
        [
          "8. Support",
          "Only when you submit in-app or web support may the following be sent to the support API and email provider:\n\n・Enquiry id, random client id, source, target app\n・Category, name, email, message\n・App version, build number, OS name/version, locale, submission time\n・Details needed to prevent abuse\n\nVisit records are never attached automatically.",
        ],
        [
          "9. Loading legal documents",
          "The App loads the latest Privacy Policy and Terms from the official website. When offline, a bundled reference copy is shown. The website version is authoritative.",
        ],
        [
          "10. Service providers",
          "Where needed, the Service uses:\n\n・Google Mobile Ads\n・Google User Messaging Platform\n・Cloudflare Workers (support API)\n・Resend (support email)\n・Apple system frameworks\n・Website hosting\n\nWorld and regional map geometry is bundled from open data such as Natural Earth. Bundled map data itself does not send user information abroad.",
        ],
        [
          "11. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information. Processing by providers is limited to what the Service needs.",
        ],
        [
          "12. Retention and deletion",
          "On-device records remain until you delete them. You can clear data in Settings. Uninstalling removes on-device data; the Operator cannot restore it. Support information is kept as needed for response, law, security and abuse prevention. Information held by ad partners follows their policies.",
        ],
        [
          "13. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS mechanisms.",
        ],
        [
          "14. Minors",
          "If a minor uses the App, please do so with a parent or guardian’s consent.",
        ],
        [
          "15. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and may be announced on the site or in the App.",
        ],
        ["16. Contact", "Questions: in-app support, the shared support form, or support@tmkch.io."],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリ「Colorvia」および公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Colorviaは、訪れた国の記録、世界地図の表示、訪問統計、対応国における国内地域マップ、地名検索、訪問記録の共有、テーマ・地図色、JSONによる書き出し・読み込み、データ削除、アプリ内問い合わせなどの機能を提供します。アカウント登録は不要です。",
        ],
        [
          "第3条（利用料金および広告）",
          "本アプリは無料で提供されます。一部の画面には広告が表示される場合があります。現在、有料プラン、広告削除機能およびアプリ内課金は提供していません。通信に必要な費用は利用者の負担とします。",
        ],
        ["第4条（利用者の責任）", "利用者は、自己の責任において本サービスを利用します。"],
        [
          "第5条（禁止事項）",
          "法令違反、不正アクセス、運営妨害、不正な広告操作、違法な複製・再配布、サポートフォームの荒らし、その他運営者が不適切と合理的に判断する行為を禁止します。",
        ],
        [
          "第6条（知的財産権）",
          "本サービスに含まれるプログラム、デザイン、文章、画像等の権利は運営者または正当な権利者に帰属します。利用者が作成した訪問記録の権利は利用者に帰属します。",
        ],
        [
          "第7条（データの管理）",
          "データは原則として端末内に保存され、iCloud等による自動同期はありません。JSON書き出し・読み込みにより手動で移行できます。書き出したファイルの管理は利用者の責任です。アプリ削除、端末故障、紛失等によりデータが失われる場合があり、運営者は復旧できません。必要に応じて、アプリ削除前に書き出しを行ってください。",
        ],
        [
          "第8条（地図・地域区分）",
          "Colorviaの地図や地域区分は、旅の記録を目的として簡略化・整理されています。政治的な立場や主張を示すものではありません。",
        ],
        [
          "第9条（広告・外部サービス）",
          "広告配信にはGoogle Mobile Adsを利用します。お問い合わせにはサポートAPIおよびメール配信事業者を利用します。各サービスの取扱いは各事業者の方針に従います。",
        ],
        [
          "第10条（保証の否認・責任制限）",
          "本サービスは現状有姿で提供されます。運営者の故意または重過失および強行法規の範囲を除き、法令で認められる範囲で責任を限定します。",
        ],
        [
          "第11条（変更・中断・終了）",
          "運営者は、OS対応、法令、広告、保守、セキュリティ等の理由により、本サービスを変更・中断・終了することがあります。",
        ],
        [
          "第12条（規約変更）",
          "本規約は変更されることがあります。変更後の規約は、本アプリまたは公式サイトに掲載された時点から効力を生じます。",
        ],
        [
          "第13条（準拠法・管轄）",
          "本規約は日本法に準拠します。消費者契約法その他の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第14条（お問い合わせ）",
          "本規約に関するお問い合わせは、アプリ内フォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the iOS app “Colorvia” and the official brand website (together, the “Service”) provided by Tomokichi. By downloading the App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "Colorvia provides visit tracking for countries, a world map, statistics, regional maps in supported countries, place search, sharing, themes and map colors, JSON export/import, data deletion, and in-app support. No account is required.",
        ],
        [
          "Article 3 — Fees and advertising",
          "The App is free. Ads may appear on some screens. Paid plans, remove-ads purchases and other in-app purchases are not currently offered. You are responsible for data charges.",
        ],
        ["Article 4 — User responsibility", "You use the Service at your own responsibility."],
        [
          "Article 5 — Prohibited conduct",
          "You must not break the law, gain unauthorized access, disrupt the Service, manipulate ads fraudulently, unlawfully copy the App, abuse support, or engage in other conduct the Operator reasonably finds inappropriate.",
        ],
        [
          "Article 6 — Intellectual property",
          "Rights in the Service’s programs, design, text and images belong to the Operator or rights holders. Rights in visit records you create belong to you.",
        ],
        [
          "Article 7 — Data management",
          "Data is stored on your device in principle; there is no automatic iCloud sync. You may migrate manually via JSON export/import and are responsible for exported files. Data may be lost if you uninstall, lose or damage the device; the Operator cannot restore it. Export before uninstalling if needed.",
        ],
        [
          "Article 8 — Maps and regions",
          "Maps and regional divisions in Colorvia are simplified for travel logging and do not express a political position.",
        ],
        [
          "Article 9 — Ads and third parties",
          "Ads use Google Mobile Ads. Support uses a support API and email provider. Each provider processes information under its own policies.",
        ],
        [
          "Article 10 — Disclaimer and liability",
          "The Service is provided “as is.” Except for willful misconduct, gross negligence or mandatory law, liability is limited to the extent permitted by law.",
        ],
        [
          "Article 11 — Changes, suspension, termination",
          "The Operator may change, suspend or end the Service for OS support, law, ads, maintenance, security or similar reasons.",
        ],
        [
          "Article 12 — Changes to these Terms",
          "These Terms may be revised. Revised Terms take effect when posted in the App or on the website.",
        ],
        [
          "Article 13 — Governing law and jurisdiction",
          "Japanese law applies. Unless mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        ["Article 14 — Contact", "In-app support, the shared support form, or support@tmkch.io."],
      ];
}
