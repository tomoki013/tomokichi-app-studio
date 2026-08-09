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
  | "pricing";

export const pick = <T>(ja: boolean, pair: [T, T]): T => pair[ja ? 0 : 1];

export const titles: Record<Page, [string, string]> = {
  features: ["活用シーン", "Use cases"],
  "how-to": ["使い方", "How to use"],
  screenshots: ["コンセプト", "Concept"],
  faq: ["よくある質問", "FAQ"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Service"],
  news: ["お知らせ", "News"],
  updates: ["アップデート情報", "App updates"],
  pricing: ["料金", "Pricing"],
};

export const subtitles: Partial<Record<Page, [string, string]>> = {
  features: [
    "保存した文脈をそっとAIに渡すだけ。\n毎日の相談が、もっと自然に。",
    "Hand saved context to AI.\nEveryday consults, made natural.",
  ],
  "how-to": [
    "保存から相談まで、3ステップ。\n専門知識は不要です。",
    "Save to consult in three steps.\nNo specialised setup required.",
  ],
  screenshots: [
    "まだ本物の画面キャプチャはありません。\n世界観を伝えるコンセプトイラストです。",
    "No real app captures yet —\nconcept illustrations of the Soonish world.",
  ],
  faq: [
    "使い方や料金、AI相談についての質問をまとめました。",
    "Answers about usage, pricing, and AI consultation.",
  ],
  news: [
    "Soonishからのお知らせと、旅メモについての読みもの。",
    "News from Soonish and notes about travel memos.",
  ],
  updates: [
    "バージョンごとの新機能、改善、修正を記録します。",
    "Version-by-version features, improvements, and fixes.",
  ],
  pricing: [
    "Free / Plus / Team。\n保存からAI相談まで、自分のペースで。",
    "Free / Plus / Team.\nFrom save to AI consult, at your pace.",
  ],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "旅行計画・カフェ選び・買い物比較など、Soonishで広がる毎日の相談シーン。",
    "Everyday consult scenes with Soonish: trips, cafés, shopping comparisons, and more.",
  ],
  "how-to": [
    "保存からAI相談まで3ステップ。いつものAIにもアプリ内からも渡せます。",
    "Save to AI consult in three steps — via your usual AI or the in-app button.",
  ],
  screenshots: [
    "Soonishの世界観を伝えるコンセプトイラスト。実機キャプチャではありません。",
    "Concept illustrations of Soonish’s world — not real device captures.",
  ],
  faq: [
    "AI相談の方法、保存・整理、データの取り扱い、料金プランについてのFAQ。",
    "FAQ about AI consults, saving, data handling, and pricing plans.",
  ],
  privacy: [
    "Soonishのプライバシーポリシー。端末内保存、Share拡張のApp Group、サポートフォームについて。",
    "Soonish Privacy Policy covering on-device storage, the Share extension App Group, and support.",
  ],
  terms: [
    "Soonishの利用規約。無料提供、端末内保存、データ管理について。",
    "Soonish Terms of Service covering free use, on-device storage, and data responsibility.",
  ],
  news: [
    "Soonish公式ブランドサイト公開のお知らせ。",
    "Updates from Soonish, including product notes and columns.",
  ],
  updates: [
    "Soonishアプリのバージョンごとの変更内容。",
    "Version-by-version release notes for the Soonish app.",
  ],
  pricing: [
    "SoonishのFree / Plus / Teamプラン。保存・AI相談・エクスポートの違い。",
    "Soonish Free, Plus, and Team plans — saves, AI consult, and export.",
  ],
};

export const languagesJa =
  "英語、日本語、中国語（簡体字）、中国語（繁体字）、韓国語、スペイン語、フランス語、ドイツ語、ポルトガル語（ブラジル）、イタリア語";
export const languagesEn =
  "English, Japanese, Simplified Chinese, Traditional Chinese, Korean, Spanish, French, German, Portuguese (Brazil), Italian";

export const tagline: [string, string] = [
  "保存しておく。あとで、相談できる。",
  "Save it now. Consult later.",
];

export const homeDescription: [string, string] = [
  "Soonishは、保存・整理・AI相談をひとつにした旅行メモアプリです。リンクやメモを残し、いつものAIに文脈ごと渡して相談できます。現在App Store公開準備中。",
  "Soonish is a travel memo app that unifies saving, organising, and AI consultation. Keep links and notes, then hand your context to the AI you already use. Preparing for the App Store.",
];

export function features(ja: boolean) {
  return ja
    ? ([
        [
          "save",
          "クイック保存",
          "テキストやURLをすばやくしまえます。リンクプレビューやGoogleマップのリンクにも対応。",
        ],
        [
          "share",
          "Share拡張",
          "Safariやほかのアプリから共有シート経由で、そのままシェルフへ送れます。",
        ],
        [
          "chip",
          "理由チップ",
          "「なぜ目に止まった？」をチップで残せます。あとから自分の気持ちを思い出せます。",
        ],
        [
          "timing",
          "ゆるい時期",
          "soon / someday / seasonal など、厳密な期限ではなくゆるいタイミングで置いておけます。",
        ],
        [
          "spark",
          "再発見「今日、これどう？」",
          "日々のピックで、しまっておいた興味がふと戻ってきます。",
        ],
        [
          "status",
          "ステータス",
          "やった／アーカイブ／シェルフに戻す。終わらせるプレッシャーなしに整理できます。",
        ],
        [
          "shelf",
          "カラーとアイコンのシェルフ",
          "好きな色とアイコンでシェルフを分け、眺めやすい置き場をつくれます。",
        ],
        [
          "search",
          "検索",
          "タイトルやメモ、URLからさっと探せます。",
        ],
        [
          "backup",
          "JSONバックアップ",
          "設定から書き出し・読み込み。機種変更の前に手元へ残せます。",
        ],
        [
          "device",
          "端末内・アカウント不要",
          "SwiftDataで端末内に保存。サーバー同期やログインはありません。",
        ],
        [
          "globe",
          "10言語",
          "英語・日本語・中国語（簡繁）・韓国語・スペイン語・フランス語・ドイツ語・ポルトガル語（ブラジル）・イタリア語。",
        ],
        [
          "moon",
          "やさしいオンボーディング",
          "はじめてのシェルフづくりを、短い案内で案内します。",
        ],
      ] as const)
    : ([
        [
          "save",
          "Quick save",
          "Stash text or a URL in a moment. Link previews and Google Maps links are supported.",
        ],
        [
          "share",
          "Share extension",
          "Send items into your shelf from Safari or other apps via the system share sheet.",
        ],
        [
          "chip",
          "Reason chips",
          "Capture why it caught your eye. Later, the feeling comes back with the item.",
        ],
        [
          "timing",
          "Loose timing",
          "Place things as soon, someday, or seasonal — not hard deadlines.",
        ],
        [
          "spark",
          "Rediscovery picks",
          "Daily “how about this?” moments bring forgotten interests back into view.",
        ],
        [
          "status",
          "Status",
          "Done, archive, or back to the shelf — tidy without the pressure of a to-do list.",
        ],
        [
          "shelf",
          "Shelves with colour & icons",
          "Group items into shelves with colours and icons that feel like yours.",
        ],
        [
          "search",
          "Search",
          "Find items by title, notes, or URL.",
        ],
        [
          "backup",
          "JSON backup",
          "Export and import from Settings before you change devices.",
        ],
        [
          "device",
          "On-device, no account",
          "Stored with SwiftData on your iPhone. No cloud login or server sync.",
        ],
        [
          "globe",
          "Ten languages",
          "English, Japanese, Simplified & Traditional Chinese, Korean, Spanish, French, German, Portuguese (Brazil), Italian.",
        ],
        [
          "moon",
          "Gentle onboarding",
          "A short intro helps you set up your first shelf.",
        ],
      ] as const);
}

export function howGuides(ja: boolean) {
  return ja
    ? [
        {
          t: "はじめる",
          note: "アカウント登録は不要です。開いたその場から使えます。",
          steps: [
            "アプリを開くと短いオンボーディングが表示されます。",
            "最初のシェルフを用意し、好きな色やアイコンを選べます。",
            "ホームに戻ると、空のシェルフと再発見の入口が待っています。",
          ],
        },
        {
          t: "興味をしまう",
          note: "完璧な整理は不要。まずは「いつか」の置き場に置くだけです。",
          steps: [
            "＋からテキストやURLを追加します。",
            "ほかのアプリからはShare拡張で送れます。",
            "リンクならプレビューが付き、地図リンクもそのまま残せます。",
            "理由チップとゆるい時期（soon / someday / seasonal）を添えられます。",
          ],
        },
        {
          t: "シェルフを眺める",
          note: "タスク一覧ではなく、棚のように眺められることを大切にしています。",
          steps: [
            "シェルフごとに色とアイコンで仕分けます。",
            "検索でタイトルやメモから探せます。",
            "やった／アーカイブ／シェルフに戻すで状態を変えられます。",
          ],
        },
        {
          t: "今日、これどう？",
          note: "忘れ去られた興味が、ふと手元に戻ってくるためのきっかけです。",
          steps: [
            "日々のピックで、シェルフからいくつかが選ばれます。",
            "気になったら開いて続きを見るか、また棚に戻します。",
            "完了したら「やった」へ。プレッシャーなく、気持ちよく片付けられます。",
          ],
        },
        {
          t: "バックアップ",
          note: "自動同期はないため、機種変更の前にJSONを書き出してください。",
          steps: [
            "設定 → データ管理 → JSON書き出し。",
            "新しい端末でJSONを読み込み、シェルフと項目を復元します。",
            "書き出したファイルは利用者自身で保管してください。",
          ],
        },
      ]
    : [
        {
          t: "Get started",
          note: "No account needed — open and begin.",
          steps: [
            "A short onboarding appears the first time you open the app.",
            "Create your first shelf and pick a colour or icon if you like.",
            "Home shows your shelf and the path into rediscovery.",
          ],
        },
        {
          t: "Stash an interest",
          note: "No perfect organisation required — just a place for “someday”.",
          steps: [
            "Add text or a URL with +.",
            "Or send from other apps via the Share extension.",
            "Links get a preview; Google Maps links stay useful.",
            "Optional reason chips and loose timing (soon / someday / seasonal).",
          ],
        },
        {
          t: "Browse your shelves",
          note: "Built to feel like a shelf, not a task list.",
          steps: [
            "Sort into shelves with colours and icons.",
            "Search by title or notes.",
            "Mark done, archive, or send back to the shelf.",
          ],
        },
        {
          t: "“How about this?”",
          note: "A gentle nudge so forgotten interests can surface again.",
          steps: [
            "Daily picks surface a few items from your shelves.",
            "Open one that sparks, or put it back.",
            "When you actually do it, mark it done — without the guilt of a checklist.",
          ],
        },
        {
          t: "Back up",
          note: "There is no automatic sync — export JSON before changing phones.",
          steps: [
            "Settings → Data management → export JSON.",
            "Import on a new device to restore shelves and items.",
            "You manage exported files yourself.",
          ],
        },
      ];
}

export function landingFeatures(ja: boolean) {
  return ja
    ? [
        ["✦", "サッと保存", "リンク・メモ・画像・タスクを、旅の文脈として残す。"],
        ["▤", "タグとコレクション", "行きたい・予算重視など、自分の視点で整理。"],
        ["✧", "AIに相談", "アプリ内から、またはいつものChatGPT / Geminiへ文脈ごと渡す。"],
        ["◎", "毎日の相談シーン", "旅行計画、カフェ選び、買い物比較、記事の整理まで。"],
        ["☁", "Free / Plus", "まずは無料で。深く使うなら Plus で無制限と高度な連携。"],
        ["☾", "端末中心", "保存は端末中心。AIに渡す内容は、あなたが明示したものだけ。"],
      ]
    : [
        ["✦", "Save fast", "Links, notes, images, tasks — as trip context."],
        ["▤", "Tags & collections", "Organise with your own lens: want-to-go, budget-first…"],
        ["✧", "Consult AI", "In-app, or hand context to ChatGPT / Gemini you already use."],
        ["◎", "Everyday scenes", "Trips, cafés, shopping compares, article tidy-ups."],
        ["☁", "Free / Plus", "Start free. Go deeper with Plus unlimited and automation."],
        ["☾", "Device-first", "Storage stays local-first. Only what you send reaches AI."],
      ];
}

export function landingSteps(ja: boolean) {
  return ja
    ? [
        ["1", "保存する", "気になる旅行先やメモ、アイデアを Soonish に。"],
        ["2", "相談する", "いつものAIに聞くか、アプリの「相談する」をタップ。"],
        ["3", "次が決まる", "文脈がそろうから、AIの提案がより的確に。"],
      ]
    : [
        ["1", "Save", "Trip ideas, notes, and sparks into Soonish."],
        ["2", "Consult", "Ask your usual AI, or tap Consult in the app."],
        ["3", "Decide next", "With context ready, suggestions get sharper."],
      ];
}

export function landingFaqs(ja: boolean) {
  return ja
    ? [
        [
          "どんなアプリですか？",
          "Soonishは、保存・整理・AI相談をひとつにした旅行メモアプリです。リンクやメモを残し、文脈ごとAIに渡せます。",
        ],
        [
          "無料ですか？",
          "Free プランは¥0。Plus は月額¥480（税込¥528）。Team は近日公開予定です。",
        ],
        [
          "どのAIで使えますか？",
          "アプリ内のAI相談に加え、ChatGPT や Gemini など普段使っているAIに、保存した内容をもとに相談できます。",
        ],
      ]
    : [
        [
          "What is Soonish?",
          "A travel memo app that unifies save, organise, and AI consult — keep links and notes, then hand context to AI.",
        ],
        [
          "Is it free?",
          "Free is ¥0. Plus is ¥480/month (¥528 tax incl.). Team is coming soon.",
        ],
        [
          "Which AI works?",
          "In-app consult, plus ChatGPT, Gemini, and other tools you already use with what you saved.",
        ],
      ];
}

export function faqs(ja: boolean): [string, string, string][] {
  return ja
    ? [
        ["base", "Soonishはどんなアプリですか？", "今すぐではないけれどいつかやりたいことを集める、ローカルファーストのシェルフアプリです。タスク管理ではなく、忘れていた興味を再発見するための場所です。"],
        ["base", "無料で使えますか？", "はい。基本機能は無料です。現在、広告およびアプリ内課金はありません。"],
        ["base", "アカウントは必要ですか？", "いいえ。登録やログインなしですぐに使えます。"],
        ["base", "対応環境は？", "iPhone・iOS 17以降向けです。10言語に対応しています。"],
        ["feature", "何を保存できますか？", "テキストやURLを保存できます。リンクプレビューやGoogleマップのリンクにも対応しています。"],
        ["feature", "Share拡張とは？", "Safariなどほかのアプリの共有シートから、Soonishのシェルフへ直接送れます。拡張と本体はApp Groupで同じデータを参照します。"],
        ["feature", "理由チップとは？", "「なぜこれが目に止まったか」を短いチップで残す機能です。あとから見返したときに、当時の気持ちを思い出せます。"],
        ["feature", "ゆるい時期とは？", "soon / someday / seasonal など、厳密な期限ではなくゆるいタイミングのラベルです。"],
        ["feature", "「今日、これどう？」とは？", "シェルフにしまっておいた項目から、日々のピックとしていくつかを提示する再発見の機能です。"],
        ["feature", "ステータスはどう使いますか？", "やった／アーカイブ／シェルフに戻すで整理できます。完了の強制ではなく、自分のペースで片付けられます。"],
        ["data", "データはどこに保存されますか？", "SwiftDataにより端末内に保存されます。"],
        ["data", "自動同期できますか？", "現在、iCloudなどを使った端末間の自動同期には対応していません。"],
        ["data", "バックアップできますか？", "はい。設定からJSONで書き出し、別の端末で読み込めます。"],
        ["data", "Share拡張のデータは？", "Share拡張は本体アプリと同じApp Group領域を参照します。いずれも端末上に留まります。"],
        ["data", "すべてのデータを削除できますか？", "はい。設定のデータ管理から削除できます。アンインストールでも端末内データは消えます。"],
        ["net", "オフラインで使えますか？", "保存・閲覧・再発見・検索・JSONの書き出し／読み込みなど、主要機能はオフラインで利用できます。"],
        ["net", "通信が必要な操作は？", "リンクプレビューの取得、問い合わせの送信、最新のプライバシーポリシー・利用規約の表示、外部サイトを開く場合などです。"],
        ["net", "広告は表示されますか？", "いいえ。現時点で広告はありません。"],
      ]
    : [
        ["base", "What is Soonish?", "A local-first shelf for things you want to do someday — not a task manager, but a place to rediscover forgotten interests."],
        ["base", "Is it free?", "Yes. Core features are free. There are no ads and no in-app purchases today."],
        ["base", "Do I need an account?", "No."],
        ["base", "What devices are supported?", "iPhone on iOS 17 or later, with ten languages."],
        ["feature", "What can I save?", "Text and URLs, with link previews and support for Google Maps links."],
        ["feature", "What is the Share extension?", "Send items from Safari and other apps into your shelf via the system share sheet. The extension and the main app share data through an App Group."],
        ["feature", "What are reason chips?", "Short tags for why something caught your eye — so the feeling comes back when you rediscover it."],
        ["feature", "What is loose timing?", "Labels like soon, someday, and seasonal — a mood of when, not a hard deadline."],
        ["feature", "What is rediscovery?", "Daily “how about this?” picks surface items you stashed earlier."],
        ["feature", "How do statuses work?", "Done, archive, or back to the shelf — tidy at your own pace."],
        ["data", "Where is data stored?", "On your device with SwiftData."],
        ["data", "Is there automatic sync?", "Not via iCloud or similar today."],
        ["data", "Can I back up?", "Yes. Export JSON from Settings and import it on another device."],
        ["data", "What about Share extension data?", "It uses the same App Group as the main app. Everything stays on device."],
        ["data", "Can I delete everything?", "Yes, from Data management in Settings. Uninstalling also removes on-device data."],
        ["net", "Does it work offline?", "Yes for saving, browsing, rediscovery, search, and JSON export/import."],
        ["net", "What needs a network?", "Fetching some link previews, sending support messages, loading the latest legal documents, and opening external sites."],
        ["net", "Are there ads?", "No ads at present."],
      ];
}

export const faqCategories = {
  ja: [
    ["all", "すべて"],
    ["base", "基本"],
    ["feature", "機能"],
    ["data", "データ"],
    ["net", "通信"],
  ] as [string, string][],
  en: [
    ["all", "All"],
    ["base", "Basics"],
    ["feature", "Features"],
    ["data", "Data"],
    ["net", "Network"],
  ] as [string, string][],
};

export function conceptShots(ja: boolean) {
  return ja
    ? [
        {
          id: "shelf",
          title: "シェルフ",
          body: "色とアイコンで分かれた棚。タスクリストではなく、眺めのための置き場。",
        },
        {
          id: "spark",
          title: "今日、これどう？",
          body: "しまっておいた興味が、日々のピックとしてふと戻ってくる。",
        },
        {
          id: "chips",
          title: "理由チップ",
          body: "「なぜ目に止まった？」を小さなチップで残す。",
        },
        {
          id: "timing",
          title: "ゆるい時期",
          body: "soon · someday · seasonal — 締切ではなく気配。",
        },
      ]
    : [
        {
          id: "shelf",
          title: "Shelves",
          body: "Colours and icons — a place to look at, not a checklist.",
        },
        {
          id: "spark",
          title: "How about this?",
          body: "Daily picks bring stashed interests gently back into view.",
        },
        {
          id: "chips",
          title: "Reason chips",
          body: "Why it caught your eye, kept in a few soft tags.",
        },
        {
          id: "timing",
          title: "Loose timing",
          body: "soon · someday · seasonal — a mood, not a deadline.",
        },
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
          title: "Soonish公式ブランドサイトを公開しました",
          summary: "機能、使い方、コンセプト、FAQ、プライバシーポリシー、利用規約をまとめて掲載しています。",
          body: [
            "Soonishの公式ブランドサイトを公開しました。今すぐではないけれどいつかやりたいことを集めるシェルフアプリという位置づけを、公開準備中の段階からそのままお伝えしています。",
            "現時点ではApp Storeへのリンクはありません。配信の準備が整い次第、サイトからもご案内します。",
            "Soonishはアカウント不要で、データは端末内に保存されます。現在広告はありません。Share拡張はApp Groupを通じて本体と同じデータを参照します。詳細はプライバシーポリシーと利用規約をご確認ください。",
          ],
        },
        {
          id: "column-shelf",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "コラム",
          badgeTone: "column" as const,
          title: "タスクにしない、という選択",
          summary: "「いつかやりたい」は、締切を付けると息苦しくなることがあります。",
          body: [
            "興味は、やることリストに載せた瞬間から義務に近づくことがあります。Soonishは、完了率や優先度ではなく、しまっておいてふと出会うための場所として設計しています。",
            "理由チップやゆるい時期は、管理のためではなく、あとから自分の気持ちを思い出すためのしおりです。",
          ],
        },
        {
          id: "prep-note",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "準備中",
          badgeTone: "note" as const,
          title: "App Store公開に向けて",
          summary: "iPhone・iOS 17以降向け。現在公開準備中です。",
          body: [
            "Soonishは現在App Store公開準備中です。対応環境や価格の最終表示は、公開時のApp Store上の記載が正しいものとします。",
          ],
        },
      ]
    : [
        {
          id: "site-launch",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "Update",
          title: "The official Soonish brand site is now live",
          summary: "Features, how-to, concept, FAQ, Privacy Policy, and Terms—in one place.",
          body: [
            "The official Soonish brand site is live. It explains the shelf for things you want to do someday — while the app is still preparing for release.",
            "There is no App Store link yet. When distribution is ready, we will share it here as well.",
            "Soonish needs no account; data stays on your device. There are no ads today. The Share extension reads the same App Group as the main app. See the Privacy Policy and Terms for details.",
          ],
        },
        {
          id: "column-shelf",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "Column",
          badgeTone: "column" as const,
          title: "Choosing not to make it a task",
          summary: "“Someday” can feel heavy the moment you attach a deadline.",
          body: [
            "An interest can start to feel like an obligation the moment it lands on a to-do list. Soonish is designed as a place to stash and rediscover — not to track completion rates.",
            "Reason chips and loose timing are bookmarks for how you felt, not project management fields.",
          ],
        },
        {
          id: "prep-note",
          date: "2026.08.08",
          datetime: "2026-08-08",
          badge: "Coming soon",
          badgeTone: "note" as const,
          title: "Preparing for the App Store",
          summary: "Designed for iPhone on iOS 17+.",
          body: [
            "Soonish is being prepared for the App Store. The listing will be the source of truth for requirements and pricing when it ships.",
          ],
        },
      ];
}

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供するiOSアプリケーション「Soonish」（以下「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とし、本アプリ内からはWebサイトを参照します。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
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
          "本アプリはアカウント登録を必要としません。シェルフに保存した項目、メモ、設定等は原則として利用者の端末内に保存されます。運営者は、通常のアプリ利用だけではこれらの記録内容を閲覧できるサーバーを運用していません。本アプリは現時点で広告SDKを使用しません。問い合わせフォームを明示的に送信した場合に限り、利用者が入力した情報と技術情報を送信します。",
        ],
        [
          "5. 端末内に保存する情報",
          "本アプリは、SwiftData等を用いて次の情報を端末内に保存します。\n\n・シェルフの名称、色、アイコン、並び順\n・項目のタイトル、本文、URL、リンクプレビューに関するキャッシュ\n・理由チップ、ゆるい時期（soon / someday / seasonal 等）、ステータス（シェルフ／やった／アーカイブ等）\n・作成・更新日時、検索用のメタデータ\n・オンボーディング完了状態\n・表示や再発見に関するローカル設定\n・問い合わせ用のランダムなクライアント識別子\n・その他、アプリの動作に必要なローカル設定",
        ],
        [
          "6. Share拡張とApp Group",
          "本アプリは、システム共有シートから項目を受け取るためのShare拡張を提供します。Share拡張と本体アプリは、同一開発者のApp Groupコンテナを通じて端末上のデータを共有します。\n\n・共有されるのは端末内の領域に限られ、運営者のサーバーへ自動送信されません\n・利用者が共有シートから送ったテキストやURL等が、シェルフへ取り込まれます\n・App Group内のデータも、アンインストール等により端末から削除される場合があります",
        ],
        [
          "7. データの書き出し・読み込み",
          "利用者は、設定のデータ管理から、シェルフと項目等をJSON形式で書き出し、別の端末または再インストール後のSoonishへ読み込むことができます。\n\n書き出したファイルは利用者自身が管理し、第三者への共有、紛失、改変等について運営者は管理できません。不正または破損したJSON、将来の仕様変更後の互換性を完全には保証しません。",
        ],
        [
          "8. 外部通信",
          "本アプリが外部と通信を行うことがあるのは、主に次の場合です。\n\n・利用者が保存したURLについて、リンクプレビュー等を取得する場合（送信先は当該URLの公開情報およびOSのプレビュー機能に依存します）\n・最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得する場合\n・問い合わせフォームを明示的に送信した場合\n・利用者が外部リンクや地図アプリ等を開いた場合\n\n項目の本文やシェルフ構成を、運営者の分析サーバーへ送信することはありません。広告SDKおよびFirebase Analyticsは使用しません。App Tracking Transparency（ATT）プロンプトは使用しません。",
        ],
        [
          "9. お問い合わせ",
          "アプリ内または公式サポートフォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・問い合わせID、ランダムなクライアントID、送信元、対象アプリ\n・カテゴリ、名前、メールアドレス、本文\n・アプリバージョン、ビルド番号、OS名、OSバージョン、ロケール、送信日時\n・不正利用防止に必要な情報\n\nシェルフの項目内容は自動添付されません。",
        ],
        [
          "10. 法務文書の取得",
          "本アプリは、最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得して表示します。通信できない場合は、アプリに同梱した参照用文書を表示します。Web版を正本として扱います。",
        ],
        [
          "11. 外部サービス",
          "本サービスは、提供に必要な範囲で次を利用します。\n\n・Cloudflare Workers（お問い合わせAPI）\n・Resend（お問い合わせメール配送）\n・Apple（システム機能、Share拡張、SwiftData、必要に応じたリンクプレビュー等）\n・公式Webサイトの配信基盤",
        ],
        [
          "12. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "13. 保存期間と削除",
          "端末内の記録は、利用者が削除するまで保存されます。設定からデータの削除が可能です。本アプリをアンインストールすると端末内データは削除され、運営者が復旧することはできません。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。",
        ],
        [
          "14. 安全管理措置",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "15. 未成年者",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "16. ポリシーの変更",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "17. お問い合わせ先",
          "本ポリシーに関するお問い合わせは、アプリ内お問い合わせフォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the iOS app “Soonish” (the “App”) and the official brand website (together, the “Service”). The website is authoritative; the App refers to it. When offline, a bundled reference copy may be shown.",
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
          "The App does not require an account. Shelf items, notes and settings are stored on your device in principle. The Operator does not run a server that can view those records from ordinary use alone. The App does not use an advertising SDK at present. Support details are sent only when you explicitly submit a support form.",
        ],
        [
          "5. Information stored on your device",
          "Using SwiftData and related local storage, the App stores:\n\n・Shelf names, colours, icons and order\n・Item titles, body text, URLs and link-preview caches\n・Reason chips, loose timing (soon / someday / seasonal, etc.) and status (on shelf / done / archived, etc.)\n・Created and updated times and search metadata\n・Onboarding completion\n・Local preferences for display and rediscovery\n・A random client identifier for support\n・Other local settings needed for the App",
        ],
        [
          "6. Share extension and App Group",
          "The App provides a Share extension so you can send items from the system share sheet. The extension and the main app share on-device data through the developer’s App Group container.\n\n・Sharing is limited to on-device storage; nothing is auto-uploaded to Operator servers\n・Text, URLs and similar content you send via the share sheet may be added to your shelf\n・App Group data may be removed when you uninstall the app",
        ],
        [
          "7. Data export and import",
          "From Settings → Data management you can export shelves and items as JSON, and import them into Soonish on another device or after reinstall.\n\nYou manage exported files yourself. The Operator cannot control sharing, loss or alteration by others. Compatibility with invalid, corrupted or future-format JSON is not fully guaranteed.",
        ],
        [
          "8. Network activity",
          "The App may communicate externally mainly when:\n\n・Fetching link previews for a URL you saved (destinations depend on the public URL and OS preview features)\n・Loading the latest Privacy Policy and Terms from the official website\n・You explicitly submit a support form\n・You open an external link or Maps\n\nItem bodies and shelf structure are not sent to Operator analytics servers. The App does not use advertising SDKs or Firebase Analytics. There is no App Tracking Transparency (ATT) prompt.",
        ],
        [
          "9. Support",
          "Only when you submit in-app or web support may the following be sent to the support API and email provider:\n\n・Enquiry id, random client id, source, target app\n・Category, name, email, message\n・App version, build number, OS name/version, locale, submission time\n・Details needed to prevent abuse\n\nShelf contents are never attached automatically.",
        ],
        [
          "10. Loading legal documents",
          "The App loads the latest Privacy Policy and Terms from the official website. When offline, a bundled reference copy is shown. The website version is authoritative.",
        ],
        [
          "11. Service providers",
          "Where needed, the Service uses:\n\n・Cloudflare Workers (support API)\n・Resend (support email)\n・Apple system frameworks (Share extension, SwiftData, link previews as applicable)\n・Website hosting",
        ],
        [
          "12. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information. Processing by providers is limited to what the Service needs.",
        ],
        [
          "13. Retention and deletion",
          "On-device records remain until you delete them. You can clear data in Settings. Uninstalling removes on-device data; the Operator cannot restore it. Support information is kept as needed for response, law, security and abuse prevention.",
        ],
        [
          "14. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS mechanisms.",
        ],
        [
          "15. Minors",
          "If a minor uses the App, please do so with a parent or guardian’s consent.",
        ],
        [
          "16. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and may be announced on the site or in the App.",
        ],
        ["17. Contact", "Questions: in-app support, the shared support form, or support@tmkch.io."],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリ「Soonish」および公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Soonishは、いつかやりたいことの保存、Share拡張による取り込み、理由チップ、ゆるい時期、再発見（今日これどう？）、ステータス管理、シェルフ（色・アイコン）、検索、JSONによる書き出し・読み込み、データ削除、オンボーディング、アプリ内問い合わせなどの機能を提供します。アカウント登録は不要です。本アプリはタスク管理や締切管理を主目的としません。",
        ],
        [
          "第3条（利用料金）",
          "本アプリは無料で提供されます。現時点で広告およびアプリ内課金はありません。将来有料商品を提供する場合は、App Storeまたは購入画面に税込価格を表示します。通信に必要な費用は利用者の負担とします。",
        ],
        ["第4条（利用者の責任）", "利用者は、自己の責任において本サービスを利用します。保存する内容が第三者の権利を侵害しないようご注意ください。"],
        [
          "第5条（禁止事項）",
          "法令違反、不正アクセス、運営妨害、違法な複製・再配布、サポートフォームの荒らし、その他運営者が不適切と合理的に判断する行為を禁止します。",
        ],
        [
          "第6条（知的財産権）",
          "本サービスに含まれるプログラム、デザイン、文章、画像等の権利は運営者または正当な権利者に帰属します。利用者が作成したシェルフ項目の権利は利用者に帰属します。",
        ],
        [
          "第7条（データの管理）",
          "データは原則として端末内に保存され、iCloud等による自動同期はありません。Share拡張はApp Groupを通じて本体と同じ端末内データを参照します。JSON書き出し・読み込みにより手動で移行できます。書き出したファイルの管理は利用者の責任です。アプリ削除、端末故障、紛失等によりデータが失われる場合があり、運営者は復旧できません。必要に応じて、アプリ削除前に書き出しを行ってください。",
        ],
        [
          "第8条（外部サービス・リンク）",
          "お問い合わせにはサポートAPIおよびメール配信事業者を利用します。利用者が開く外部サイトや地図サービスの取扱いは、各事業者の方針に従います。リンク先の内容について運営者は責任を負いません。",
        ],
        [
          "第9条（保証の否認・責任制限）",
          "本サービスは現状有姿で提供されます。運営者の故意または重過失および強行法規の範囲を除き、法令で認められる範囲で責任を限定します。",
        ],
        [
          "第10条（変更・中断・終了）",
          "運営者は、OS対応、法令、保守、セキュリティ等の理由により、本サービスを変更・中断・終了することがあります。",
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
          "本規約に関するお問い合わせは、アプリ内フォーム、共通サポートフォーム、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the iOS app “Soonish” and the official brand website (together, the “Service”) provided by Tomokichi. By downloading the App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "Soonish provides saving of someday interests, a Share extension, reason chips, loose timing, rediscovery (“how about this?”), status management, shelves with colours and icons, search, JSON export/import, data deletion, onboarding, and in-app support. No account is required. The App is not primarily a task or deadline manager.",
        ],
        [
          "Article 3 — Fees",
          "The App is free. There are no ads and no in-app purchases at present. If paid products are introduced later, tax-inclusive prices will appear on the App Store or purchase screen. You are responsible for network charges.",
        ],
        [
          "Article 4 — Your responsibility",
          "You use the Service at your own responsibility. Do not store content that infringes others’ rights.",
        ],
        [
          "Article 5 — Prohibited conduct",
          "You must not break the law, attempt unauthorised access, disrupt the Service, illegally copy or redistribute it, abuse support forms, or engage in other conduct the Operator reasonably finds inappropriate.",
        ],
        [
          "Article 6 — Intellectual property",
          "Programs, design, text and images in the Service belong to the Operator or rightful owners. Rights in shelf items you create remain yours.",
        ],
        [
          "Article 7 — Data",
          "Data is stored on device in principle; there is no automatic iCloud sync. The Share extension uses an App Group to access the same on-device data as the main app. You may migrate manually with JSON export/import and are responsible for exported files. Data may be lost if you delete the app or lose the device; the Operator cannot restore it. Export before uninstalling when needed.",
        ],
        [
          "Article 8 — External services and links",
          "Support uses a support API and email provider. External sites and map apps you open follow their own policies. The Operator is not responsible for third-party content.",
        ],
        [
          "Article 9 — Disclaimer and limitation",
          "The Service is provided as is. Except for wilful misconduct, gross negligence, or non-waivable law, liability is limited to the fullest extent permitted.",
        ],
        [
          "Article 10 — Changes, suspension, end",
          "The Operator may change, suspend or end the Service for OS support, law, maintenance, security or similar reasons.",
        ],
        [
          "Article 11 — Changes to these Terms",
          "These Terms may change. Updated Terms take effect when posted in the App or on the official site.",
        ],
        [
          "Article 12 — Governing law",
          "These Terms are governed by the laws of Japan. Except where mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        [
          "Article 13 — Contact",
          "Questions: in-app form, the shared support form, or support@tmkch.io.",
        ],
      ];
}
