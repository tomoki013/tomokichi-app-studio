export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "faq"
  | "privacy"
  | "terms"
  | "news"
  | "updates"
  | "reviews";

export const pick = <T>(ja: boolean, pair: [T, T]): T => pair[ja ? 0 : 1];

export const titles: Record<Page, [string, string]> = {
  features: ["特徴", "Features"],
  "how-to": ["使い方", "How to play"],
  screenshots: ["スクリーンショット", "Screenshots"],
  faq: ["よくある質問", "FAQ"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Service"],
  news: ["ニュース", "News"],
  updates: ["アップデート情報", "App updates"],
  reviews: ["レビュー", "Reviews"],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "カード裏・テーブルカラー・左利き・ヒント・サウンドなど、Quiet Solitaireの静かなカスタマイズ。",
    "Quiet customisation for Quiet Solitaire: card backs, table colours, left-handed layout, hints, and sound.",
  ],
  "how-to": [
    "カードの配り方からクリアまで、Quiet Solitaireの遊び方。",
    "How to deal, move cards, and clear a Quiet Solitaire game.",
  ],
  screenshots: [
    "動作中のQuiet SolitaireをiPhone 17 Pro Maxシミュレータで撮影した実際のゲーム画面。",
    "A real game screen captured from the running Quiet Solitaire app on an iPhone 17 Pro Max simulator.",
  ],
  faq: [
    "ルール、広告、データ保存、対応環境についてのFAQ。",
    "FAQ about rules, ads, on-device data, and supported devices.",
  ],
  privacy: [
    "Quiet Solitaireのプライバシーポリシー。端末内保存、AdMob、サポートフォームについて。",
    "Quiet Solitaire Privacy Policy covering on-device data, AdMob, and support.",
  ],
  terms: [
    "Quiet Solitaireの利用規約。無料提供、広告、ローカル保存について。",
    "Quiet Solitaire Terms of Service covering free use, ads, and local storage.",
  ],
  news: [
    "Quiet Solitaire公式ブランドサイト公開のお知らせ。",
    "News from Quiet Solitaire, including product notes.",
  ],
  updates: [
    "Quiet Solitaireアプリのバージョンごとの変更内容。",
    "Version-by-version release notes for Quiet Solitaire.",
  ],
  reviews: [
    "App Store公開前のQuiet Solitaireについて、実際の画面と設計意図をご紹介します。",
    "The real screen and design intent of Quiet Solitaire before its App Store launch.",
  ],
};

export const subtitles: Partial<Record<Page, [string, string]>> = {
  features: [
    "静かなテーブルで、カードと向き合うために。",
    "Built for quiet evenings at the card table.",
  ],
  "how-to": ["クロンダイクの流れを、シンプルに。", "Classic Klondike, explained simply."],
  screenshots: [
    "動作中のアプリから撮影した、実際のゲーム画面です。",
    "A real game screen captured from the running app.",
  ],
  faq: ["よくいただくご質問をまとめました。", "Answers to the questions we hear most."],
  news: ["Quiet Solitaireからのお知らせ。", "Notes from Quiet Solitaire."],
  updates: [
    "バージョンごとの新機能、改善、修正を記録します。",
    "Features, refinements, and fixes by version.",
  ],
};

export function features(ja: boolean) {
  return ja
    ? ([
        [
          "♠",
          "クロンダイク・ルール",
          "標準的なKlondikeソリティア。場札、山札、組札の流れで、静かにクリアを目指します。",
        ],
        ["↶", "アンドゥ", "ひとつ前の手に戻せるので、じっくり考えながら進められます。"],
        ["◔", "統計", "プレイ回数やクリア数など、手元で続けた記録を振り返れます。"],
        ["✋", "左利きレイアウト", "操作しやすい側にレイアウトを寄せて、利き手に合わせられます。"],
        [
          "◎",
          "触覚・サウンド",
          "ハプティクスと効果音を個別にオン／オフ。好みの静けさに調整できます。",
        ],
        ["✦", "回収アニメーション", "カードが集まる動きを有効／無効にでき、テンポを選べます。"],
        ["💾", "端末内に保存", "進行中のゲーム、設定、統計は端末内に保存。アカウントは不要です。"],
        [
          "▦",
          "控えめなバナー広告",
          "広告が有効なとき、Google AdMobのバナーが表示される場合があります。",
        ],
      ] as const)
    : ([
        [
          "♠",
          "Klondike rules",
          "Classic Klondike solitaire—tableau, stock, and foundations, at an unhurried pace.",
        ],
        ["↶", "Undo", "Step back a move when you want more time to think."],
        [
          "◔",
          "Statistics",
          "Look back at games played, wins, and other quiet tallies kept on your phone.",
        ],
        [
          "✋",
          "Left-handed layout",
          "Shift the layout toward the side that feels natural in your hand.",
        ],
        ["◎", "Haptics & sound", "Toggle haptics and sound independently for the calm you prefer."],
        ["✦", "Collect animation", "Turn card-collect motion on or off to match your tempo."],
        [
          "💾",
          "On-device storage",
          "In-progress games, settings, and stats stay on your device. No account.",
        ],
        ["▦", "Quiet banner ads", "When ads are enabled, a Google AdMob banner may appear."],
      ] as const);
}

export function steps(ja: boolean) {
  return ja
    ? ([
        ["1", "配札を眺める", "場札に並んだカードから、動かせる順番と空き列を確認します。"],
        ["2", "組札へ積む", "スートごとにAからKまで、組札へ正しく積み上げます。"],
        ["3", "山札をめくる", "場で手が止まったら山札を開き、次の一手を探します。"],
        ["4", "アンドゥで考える", "迷ったら戻して別の手順を試せます。統計は端末内に残ります。"],
      ] as const)
    : ([
        ["1", "Read the deal", "Scan the tableau for legal sequences and open columns."],
        ["2", "Build foundations", "Stack each suit from Ace to King on the foundations."],
        ["3", "Draw from the stock", "When the tableau stalls, turn the stock and look again."],
        ["4", "Undo and reflect", "Step back if you want another line. Stats stay on your device."],
      ] as const);
}

export function howGuides(ja: boolean) {
  return ja
    ? [
        {
          title: "はじめる",
          note: "アカウント登録は不要です。アプリを開いたらすぐに卓につけます。",
          steps: [
            "アプリを起動すると、静かなテーブルの上に新しい配札が並びます。",
            "進行中のゲームがある場合は、端末内から続きが読み込まれます。",
          ],
        },
        {
          title: "カードを動かす",
          note: "降順で色を交互に場札へ、昇順でスートごとに組札へ。",
          steps: [
            "場札では、赤と黒を交互に、数字を降順で重ねます。",
            "組札では、同じスートでAからKへ積み上げます。",
            "空いた列にはKから始められる列を置けます。",
          ],
        },
        {
          title: "山札とアンドゥ",
          note: "焦らず戻せるので、夜のテーブルでもゆっくり考えられます。",
          steps: [
            "場で手が止まったら山札をタップして次のカードを開きます。",
            "アンドゥで直前の手に戻れます。",
            "設定から触覚、サウンド、回収アニメーションを調整できます。",
          ],
        },
        {
          title: "設定と統計",
          note: "左利きレイアウトや保存データは端末の中だけにあります。",
          steps: [
            "設定で左利きレイアウト、ハプティクス、サウンド、アニメーションを切り替えます。",
            "統計画面でプレイ回数やクリアなどを確認できます。",
            "ゲーム・設定・統計はローカルに保存され、アカウント同期はありません。",
          ],
        },
      ]
    : [
        {
          title: "Get started",
          note: "No account. Open the app and sit down at the table.",
          steps: [
            "Launch the app to see a fresh deal on a quiet table.",
            "If a game was in progress, it reloads from on-device storage.",
          ],
        },
        {
          title: "Move cards",
          note: "Descending alternating colours on the tableau; ascending by suit on foundations.",
          steps: [
            "On the tableau, stack cards descending and alternating red and black.",
            "On foundations, build each suit from Ace to King.",
            "Empty columns accept Kings (and sequences starting with a King).",
          ],
        },
        {
          title: "Stock and undo",
          note: "Take your time—undo keeps the evening unhurried.",
          steps: [
            "When the tableau stalls, tap the stock for the next card.",
            "Use undo to reverse the last move.",
            "Adjust haptics, sound, and collect animation in Settings.",
          ],
        },
        {
          title: "Settings and stats",
          note: "Left-handed layout and save data never leave your iPhone.",
          steps: [
            "Toggle left-handed layout, haptics, sound, and animation in Settings.",
            "Open Statistics for games played, wins, and related tallies.",
            "Games, settings, and stats stay local—there is no account sync.",
          ],
        },
      ];
}

/** Stylized concept cards only — never real captures. */
export function conceptScreens(ja: boolean) {
  return ja
    ? [
        {
          id: "table",
          title: "静かなテーブル",
          caption: "深いグリーンのフェルトとクリームのカード。夜の卓をイメージしたコンセプト。",
        },
        {
          id: "deal",
          title: "配札の流れ",
          caption: "場札・山札・組札がひとつの卓に収まる、レイアウトの雰囲気。",
        },
        {
          id: "undo",
          title: "アンドゥと余白",
          caption: "操作を急がせない、余白のあるUIのイメージ。",
        },
        {
          id: "settings",
          title: "設定のトーン",
          caption: "左利き、触覚、サウンドなど、静けさを保つためのスイッチ群。",
        },
      ]
    : [
        {
          id: "table",
          title: "Quiet table",
          caption: "Deep green felt and cream cards—an evening table mood, not a capture.",
        },
        {
          id: "deal",
          title: "The deal",
          caption: "Tableau, stock, and foundations sharing one calm surface.",
        },
        {
          id: "undo",
          title: "Room to undo",
          caption: "Interface space that does not rush the next move.",
        },
        {
          id: "settings",
          title: "Settings tone",
          caption: "Left-handed layout, haptics, sound—controls that keep the quiet.",
        },
      ];
}

export function faqs(ja: boolean): [string, string, string][] {
  return ja
    ? [
        [
          "base",
          "Quiet Solitaireはどんなアプリですか？",
          "iPhone向けの、静かなクロンダイク・ソリティアです。SpriteKitとSwiftUIで構成され、ローカルにゲームと設定を保存します。",
        ],
        [
          "base",
          "無料で使えますか？",
          "はい。基本プレイは無料です。広告が有効な場合、Google AdMobのバナーが表示されることがあります。現時点でアプリ内課金はありません。",
        ],
        ["base", "アカウントは必要ですか？", "いいえ。登録やログインなしですぐに遊べます。"],
        ["base", "対応環境は？", "iPhone・iOS 26.0以降向けです。"],
        [
          "play",
          "ルールは何ですか？",
          "標準的なKlondike（クロンダイク）です。場札は色を交互に降順、組札はスートごとにAからKへ積みます。",
        ],
        ["play", "アンドゥはありますか？", "はい。直前の手に戻せます。"],
        [
          "play",
          "左利きに対応していますか？",
          "はい。設定で左利き向けレイアウトに切り替えられます。",
        ],
        [
          "play",
          "振動や音を消せますか？",
          "はい。ハプティクスとサウンドをそれぞれオフにできます。回収アニメーションも切り替えられます。",
        ],
        [
          "data",
          "データはどこに保存されますか？",
          "進行中のゲーム、設定、統計は端末内に保存されます。",
        ],
        [
          "data",
          "クラウド同期はありますか？",
          "ありません。機種変更時の自動引き継ぎはありません。",
        ],
        [
          "data",
          "広告は出ますか？",
          "広告が有効なとき、Google AdMobのバナーが表示される場合があります。このバージョンではApp Tracking Transparency（ATT）は要求しません。",
        ],
        [
          "data",
          "お問い合わせは？",
          "公式サイトの共通サポートフォームからQuiet Solitaireを選んで送信できます。",
        ],
      ]
    : [
        [
          "base",
          "What is Quiet Solitaire?",
          "A calm Klondike solitaire for iPhone, built with SpriteKit and SwiftUI, with games and settings stored on device.",
        ],
        [
          "base",
          "Is it free?",
          "Yes. Core play is free. When ads are enabled, a Google AdMob banner may appear. There are no in-app purchases at this time.",
        ],
        ["base", "Do I need an account?", "No. Play without signing up."],
        ["base", "What devices are supported?", "iPhone on iOS 26.0 or later."],
        [
          "play",
          "What rules does it use?",
          "Classic Klondike: alternating colours descending on the tableau; Ace-to-King by suit on foundations.",
        ],
        ["play", "Is there undo?", "Yes—you can reverse the previous move."],
        ["play", "Is there a left-handed layout?", "Yes. Switch it in Settings."],
        [
          "play",
          "Can I mute haptics and sound?",
          "Yes. Toggle haptics and sound independently, plus collect animation.",
        ],
        [
          "data",
          "Where is data stored?",
          "In-progress games, settings, and statistics stay on your device.",
        ],
        [
          "data",
          "Is there cloud sync?",
          "No. There is no automatic transfer when you change phones.",
        ],
        [
          "data",
          "Are there ads?",
          "When ads are enabled, a Google AdMob banner may appear. This version does not request App Tracking Transparency (ATT).",
        ],
        [
          "data",
          "How do I contact support?",
          "Use the shared Tomokichi support form and select Quiet Solitaire.",
        ],
      ];
}

export const faqCategories = {
  ja: [
    ["all", "すべて"],
    ["base", "基本"],
    ["play", "プレイ"],
    ["data", "データ・広告"],
  ] as [string, string][],
  en: [
    ["all", "All"],
    ["base", "Basics"],
    ["play", "Play"],
    ["data", "Data & ads"],
  ] as [string, string][],
};

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供するiOSアプリケーション「Quiet Solitaire」（以下「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とします。",
        ],
        [
          "2. 運営者情報",
          "運営者：Tomokichi（個人開発者）\nお問い合わせ：https://tmkch.io の共通サポートフォーム（アプリとして Quiet Solitaire を選択）\nメール：support@tmkch.io",
        ],
        [
          "3. 適用範囲",
          "本ポリシーは、本アプリの利用および公式ブランドサイトの閲覧に適用されます。",
        ],
        [
          "4. 基本方針",
          "本アプリはアカウント登録を必要としません。ゲームの進行、設定、統計は原則として利用者の端末内に保存されます。運営者は、通常のアプリ利用だけではこれらの記録内容を閲覧できるサーバーを運用していません。本アプリは広告表示のためGoogle Mobile Ads（AdMob）SDKを使用する場合があります。問い合わせフォームを明示的に送信した場合に限り、利用者が入力した情報と技術情報を送信します。",
        ],
        [
          "5. 端末内に保存する情報",
          "本アプリは、次の情報を端末内に保存します。\n\n・進行中のゲーム状態（配札・場札・山札・組札など）\n・設定（左利きレイアウト、ハプティクス、サウンド、回収アニメーション、広告表示に関するアプリ内設定など）\n・統計（プレイ回数、クリア数など）\n・その他、アプリの動作に必要なローカル設定",
        ],
        [
          "6. 広告配信",
          "広告が有効な場合、本アプリはGoogle Mobile Ads（AdMob）SDKを使用してバナー広告を表示することがあります。\n\n・バナー広告のみを想定しています（提供状況はバージョンにより変わり得ます）\n・このバージョンでは App Tracking Transparency（ATT）プロンプトは要求しません\n・Firebase Analyticsは使用しません\n・現時点で広告削除のアプリ内課金は提供していません\n\n広告配信事業者は、広告の配信、効果測定、不正防止のため、端末情報、IPアドレス、広告操作情報、診断情報などを取り扱う場合があります。取扱いはGoogleのプライバシーポリシーおよび利用者の設定に従います。運営者は、ゲームの進行内容や統計を広告目的で広告配信事業者へ提供しません。",
        ],
        [
          "7. お問い合わせ",
          "公式サポートフォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・問い合わせID、送信元、対象アプリ\n・カテゴリ、名前、メールアドレス、本文\n・アプリバージョン、OS情報、ロケール、送信日時など、対応に必要な技術情報\n・不正利用防止に必要な情報\n\nゲームの進行データや統計は自動添付されません。",
        ],
        [
          "8. 外部サービス",
          "本サービスは、提供に必要な範囲で次を利用します。\n\n・Google Mobile Ads / AdMob（広告が有効な場合）\n・Cloudflare Workers（お問い合わせAPI）\n・Resend（お問い合わせメール配送）\n・Apple（システム機能）\n・公式Webサイトの配信基盤",
        ],
        [
          "9. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "10. 保存期間と削除",
          "端末内の記録は、利用者が削除するまで、またはアプリのアンインストール等により端末から除去されるまで保存されます。本アプリをアンインストールすると端末内データは削除され、運営者が復旧することはできません。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。広告事業者が扱う情報は各事業者の方針に従います。",
        ],
        [
          "11. 安全管理措置",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "12. 未成年者",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "13. ポリシーの変更",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "14. お問い合わせ先",
          "本ポリシーに関するお問い合わせは、共通サポートフォーム（Quiet Solitaire を選択）、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the iOS app “Quiet Solitaire” (the “App”) and the official brand website (together, the “Service”). The website version is authoritative.",
        ],
        [
          "2. Operator",
          "Operator: Tomokichi (individual developer)\nContact: the shared support form at https://tmkch.io (select Quiet Solitaire)\nEmail: support@tmkch.io",
        ],
        [
          "3. Scope",
          "This policy applies to use of the App and browsing of the official brand website.",
        ],
        [
          "4. Basic policy",
          "The App does not require an account. Game progress, settings, and statistics are stored on your device in principle. The Operator does not run a server that can view those records from ordinary use alone. The App may use the Google Mobile Ads (AdMob) SDK to show ads. Support details are sent only when you explicitly submit a support form.",
        ],
        [
          "5. Information stored on your device",
          "The App stores:\n\n・In-progress game state (deal, tableau, stock, foundations, and related play state)\n・Settings (left-handed layout, haptics, sound, collect animation, in-app ad-related preferences, and similar)\n・Statistics (games played, wins, and related tallies)\n・Other local settings needed for the App",
        ],
        [
          "6. Advertising",
          "When ads are enabled, the App may use the Google Mobile Ads (AdMob) SDK to show a banner ad.\n\n・Banner ads only are intended (exact placement may change by version)\n・This version does not request an App Tracking Transparency (ATT) prompt\n・Firebase Analytics is not used\n・No remove-ads in-app purchase is offered at this time\n\nAdvertising partners may process device information, IP address, ad interaction data, and diagnostics for delivery, measurement, and fraud prevention. Handling follows Google’s policies and your settings. The Operator does not send game progress or statistics to ad partners for advertising.",
        ],
        [
          "7. Support",
          "Only when you submit the shared support form may the following be sent to the support API and email provider:\n\n・Enquiry id, source, target app\n・Category, name, email, message\n・App version, OS details, locale, submission time, and similar technical fields needed to respond\n・Details needed to prevent abuse\n\nGame progress and statistics are never attached automatically.",
        ],
        [
          "8. Service providers",
          "Where needed, the Service uses:\n\n・Google Mobile Ads / AdMob (when ads are enabled)\n・Cloudflare Workers (support API)\n・Resend (support email)\n・Apple system frameworks\n・Website hosting",
        ],
        [
          "9. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information. Processing by providers is limited to what the Service needs.",
        ],
        [
          "10. Retention and deletion",
          "On-device records remain until you delete them or remove the App. Uninstalling removes on-device data; the Operator cannot restore it. Support information is kept as needed for response, law, security, and abuse prevention. Information held by ad partners follows their policies.",
        ],
        [
          "11. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS mechanisms.",
        ],
        [
          "12. Minors",
          "If a minor uses the App, please do so with a parent or guardian’s consent.",
        ],
        [
          "13. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and may be announced on the site or in the App.",
        ],
        [
          "14. Contact",
          "Questions: the shared support form (select Quiet Solitaire), or support@tmkch.io.",
        ],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリ「Quiet Solitaire」および公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Quiet Solitaireは、クロンダイク形式のソリティア、アンドゥ、統計、設定（左利きレイアウト、ハプティクス、サウンド、回収アニメーションなど）、端末内へのゲーム・設定・統計の保存などの機能を提供します。アカウント登録は不要です。",
        ],
        [
          "第3条（利用料金および広告）",
          "本アプリは無料で提供されます。広告が有効な場合、一部の画面にGoogle AdMobのバナー広告が表示されることがあります。現在、有料プランおよびアプリ内課金は提供していません。通信に必要な費用は利用者の負担とします。",
        ],
        ["第4条（利用者の責任）", "利用者は、自己の責任において本サービスを利用します。"],
        [
          "第5条（禁止事項）",
          "法令違反、不正アクセス、運営妨害、不正な広告操作、違法な複製・再配布、サポートフォームの荒らし、その他運営者が不適切と合理的に判断する行為を禁止します。",
        ],
        [
          "第6条（知的財産権）",
          "本サービスに含まれるプログラム、デザイン、文章、画像等の権利は運営者または正当な権利者に帰属します。",
        ],
        [
          "第7条（データの管理）",
          "ゲーム、設定、統計は原則として端末内に保存されます。クラウド同期やアカウントによる引き継ぎはありません。アプリ削除、端末故障、紛失等によりデータが失われる場合があり、運営者は復旧できません。",
        ],
        [
          "第8条（広告・外部サービス）",
          "広告配信にはGoogle Mobile Ads（AdMob）を利用する場合があります。お問い合わせにはサポートAPIおよびメール配信事業者を利用します。各サービスの取扱いは各事業者の方針に従います。",
        ],
        [
          "第9条（保証の否認・責任制限）",
          "本サービスは現状有姿で提供されます。運営者の故意または重過失および強行法規の範囲を除き、法令で認められる範囲で責任を限定します。",
        ],
        [
          "第10条（変更・中断・終了）",
          "運営者は、OS対応、法令、広告、保守、セキュリティ等の理由により、本サービスを変更・中断・終了することがあります。",
        ],
        [
          "第11条（規約変更）",
          "本規約は変更されることがあります。変更後の規約は、本アプリまたは公式サイトに掲載された時点から効力を生じます。",
        ],
        [
          "第12条（準拠法・管轄）",
          "本規約は日本法に準拠します。消費者契約法その他の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第13条（お問い合わせ）",
          "本規約に関するお問い合わせは、共通サポートフォーム（Quiet Solitaire を選択）、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the iOS app “Quiet Solitaire” and the official brand website (together, the “Service”) provided by Tomokichi. By downloading the App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "Quiet Solitaire provides Klondike solitaire play, undo, statistics, settings (including left-handed layout, haptics, sound, and collect animation), and on-device storage of games, settings, and stats. No account is required.",
        ],
        [
          "Article 3 — Fees and advertising",
          "The App is free. When ads are enabled, a Google AdMob banner may appear on some screens. Paid plans and in-app purchases are not currently offered. You are responsible for data charges.",
        ],
        ["Article 4 — User responsibility", "You use the Service at your own responsibility."],
        [
          "Article 5 — Prohibited conduct",
          "You must not break the law, gain unauthorized access, disrupt the Service, manipulate ads fraudulently, unlawfully copy the App, abuse support, or engage in other conduct the Operator reasonably finds inappropriate.",
        ],
        [
          "Article 6 — Intellectual property",
          "Rights in the Service’s programs, design, text, and images belong to the Operator or rights holders.",
        ],
        [
          "Article 7 — Data management",
          "Games, settings, and statistics are stored on your device in principle. There is no cloud sync or account-based transfer. Data may be lost if you uninstall, lose, or damage the device; the Operator cannot restore it.",
        ],
        [
          "Article 8 — Advertising and providers",
          "Advertising may use Google Mobile Ads (AdMob). Support uses the support API and email delivery providers. Each provider’s handling follows its own policies.",
        ],
        [
          "Article 9 — Disclaimer and limitation",
          "The Service is provided as is. Except for willful misconduct, gross negligence, or mandatory law, liability is limited to the extent permitted by law.",
        ],
        [
          "Article 10 — Changes, suspension, termination",
          "The Operator may change, suspend, or end the Service for OS support, law, advertising, maintenance, security, or similar reasons.",
        ],
        [
          "Article 11 — Changes to these Terms",
          "These Terms may change. Updated Terms take effect when published in the App or on the official site.",
        ],
        [
          "Article 12 — Governing law and venue",
          "These Terms are governed by Japanese law. Except where mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        [
          "Article 13 — Contact",
          "Questions: the shared support form (select Quiet Solitaire), or support@tmkch.io.",
        ],
      ];
}

export function newsPosts(ja: boolean) {
  return ja
    ? [
        {
          id: "site-launch",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "お知らせ",
          title: "Quiet Solitaire公式ブランドサイトを公開しました",
          summary:
            "機能、遊び方、コンセプト画面、FAQ、プライバシーポリシー、利用規約をまとめて掲載しています。",
          body: [
            "Quiet Solitaireの公式ブランドサイトを公開しました。iPhone向けの静かなクロンダイク・ソリティアという位置づけを、App Store公開準備中の段階からそのままお伝えしています。",
            "現時点ではApp Storeへのリンクはありません。配信の準備が整い次第、サイトからもご案内します。",
            "ゲーム・設定・統計は端末内に保存され、アカウントは不要です。広告が有効なときはAdMobバナーが表示される場合があります。詳細はプライバシーポリシーと利用規約をご確認ください。",
          ],
        },
        ]
    : [
        {
          id: "site-launch",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "Update",
          title: "The official Quiet Solitaire brand site is now live",
          summary:
            "Features, how to play, concept screens, FAQ, Privacy Policy, and Terms—in one place.",
          body: [
            "The official Quiet Solitaire brand site is live. It introduces a calm Klondike solitaire for iPhone while the app prepares for the App Store.",
            "There is no App Store link yet. When distribution is ready, we will share it here as well.",
            "Games, settings, and stats stay on your device with no account. When ads are enabled, an AdMob banner may appear. See Privacy and Terms for details.",
          ],
        },
        ];
}
