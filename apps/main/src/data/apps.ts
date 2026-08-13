import { appSiteUrl } from "@tomokichi/app-site/urls";

export type Locale = "ja" | "en";

export type AppStatus = "released" | "developing" | "concept";

/**
 * What an app concretely is. Every field here has to be checkable against the
 * app or its brand site — this is the page people read before installing.
 */
export interface AppDetail {
  /** What it does, as short verifiable statements. */
  highlights: Record<Locale, string[]>;
  /** Price and any in-app purchase, in plain language. */
  pricing: Record<Locale, string>;
  /** Device family and minimum OS. */
  requirements: Record<Locale, string>;
  /** Where data lives and whether an account is needed. */
  privacy: Record<Locale, string>;
  /** Interface languages, when the count is settled. */
  languages?: Record<Locale, string>;
}

export interface AppItem {
  slug: string;
  name: string;
  /** One-line copy shown on cards. */
  tagline: Record<Locale, string>;
  /** 2–3 line description shown on the large (Products page) cards. */
  description: Record<Locale, string>;
  /**
   * Short concept label for product exploration (e.g. Travel Memory).
   * Helps differentiate apps that share a surface domain.
   */
  concept: Record<Locale, string>;
  /**
   * What was noticed that led to this. Products lead with this rather than a
   * feature list — an app here is the answer to something, not the starting
   * point.
   */
  origin: Record<Locale, string>;
  status: AppStatus;
  platform: string[];
  /** CSS gradient class used by <AppIcon> (see global.css). */
  iconClass: string;
  /**
   * Stem of a real simulator capture in `src/assets/screens`, without the
   * locale or extension — `remeet-home` resolves `remeet-ja-home.webp`. Only
   * set for apps that actually have captures; nothing else claims to be a
   * screenshot.
   */
  screen?: string;
  /** Verified specifics. Absent for concepts that are not built yet. */
  detail?: AppDetail;
  /** Live site. Left undefined while a subdomain is not published yet. */
  url?: string;
  /** Accent colour, used sparingly inside a card. */
  accent?: string;
  featured: boolean;
  order: number;
}

export const apps: AppItem[] = [
  {
    slug: "remeet",
    name: "Remeet",
    tagline: {
      ja: "また会える日までを、ふたりで待つ。",
      en: "Wait together for the day you meet again.",
    },
    description: {
      ja: "離れて過ごす時間を、ただ待つだけで終わらせないためのアプリです。",
      en: "An app that turns time apart into something more than just waiting.",
    },
    concept: {
      ja: "距離と再会",
      en: "Distance & reunion",
    },
    origin: {
      ja: "会えるまであと何日、と数えていると、あいだの日がぜんぶ「まだ会えていない日」になってしまう。その日々にも何か残ってほしかった。",
      en: "Counting down to the next meeting turned every day in between into “a day we still haven’t met.” I wanted those days to leave something behind.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "remeet",
    url: appSiteUrl("remeet"),
    accent: "#8EB5D4",
    screen: "remeet-home",
    detail: {
      highlights: {
        ja: [
          "再会の日までの残り日数と、離れていた時間の進捗",
          "ふたつの都市をつなぐルートと、それぞれの現地時刻・天気",
          "待っている間の写真とメモを、日付ごとに記録",
          "会ったらやりたいことをリストに残す",
          "再会した日を、写真と振り返りごとアルバムへ",
          "ホーム画面・ロック画面のウィジェット",
        ],
        en: [
          "Days remaining until the reunion, and how far the wait has come",
          "A route between both cities, with each one's local time and weather",
          "Photos and notes from the time apart, kept by date",
          "A list of things to do together when you meet again",
          "Reunions saved to an album with a photo and a reflection",
          "Home Screen and Lock Screen widgets",
        ],
      },
      pricing: {
        ja: "無料。一部の画面に広告が表示されます。",
        en: "Free, with ads on some screens.",
      },
      requirements: {
        ja: "iPhone・iOS 26以降",
        en: "iPhone, iOS 26 or later",
      },
      privacy: {
        ja: "個人データは端末内に保存。共有した再会のみiCloud経由で同期。独自アカウントは不要です。",
        en: "Personal data stays on your device. Shared reunions sync via iCloud. No proprietary account.",
      },
      languages: {
        ja: "6言語（日本語・英語・スペイン語・フランス語・韓国語・簡体字中国語）",
        en: "6 languages (English, Japanese, Spanish, French, Korean, Simplified Chinese)",
      },
    },
    featured: true,
    order: 1,
  },
  {
    slug: "tripory",
    name: "Tripory",
    tagline: {
      ja: "旅そのものを、あとから辿れる記憶に。",
      en: "Keep the journey itself as a memory you can revisit.",
    },
    description: {
      ja: "写真・タイムライン・メモで、旅の過程を残すアプリです。地図は記憶を眺める方法のひとつです。",
      en: "An app for keeping journeys — photos, timeline, notes. The map is one way to look back at memory.",
    },
    concept: {
      ja: "旅の記憶",
      en: "Travel memory",
    },
    origin: {
      ja: "行った国と、行きたい国と、旅ごとの記憶。どれも別々の場所に散らばっていて、あとから辿れなくなっていた。",
      en: "Countries visited, countries I want to go, and the memories from each trip — all scattered in different places, none of it traceable later.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "tripory",
    url: appSiteUrl("tripory"),
    accent: "#5F9E7F",
    screen: "tripory-home",
    detail: {
      highlights: {
        ja: [
          "旅ごとの記録（タイトル・訪問先・日付・メモ）",
          "旅のタイムラインで過程を振り返る",
          "旅の記録に写真を添付",
          "訪問済み・行きたい国をステータスで管理",
        ],
        en: [
          "A record per trip: title, places, dates and notes",
          "Look back on the journey as a timeline",
          "Attach photos to a trip",
          "Track countries as visited or want to go",
        ],
      },
      pricing: {
        ja: "無料。広告や行動解析のSDKは組み込んでいません。",
        en: "Free. No advertising or analytics SDKs are bundled.",
      },
      requirements: {
        ja: "iPhone",
        en: "iPhone",
      },
      privacy: {
        ja: "端末内のデータベースにのみ保存。写真はiOS標準の選択画面から選んだものだけを扱います。",
        en: "Kept only in an on-device database. Photos come through iOS's standard picker, so only what you choose is passed in.",
      },
    },
    featured: true,
    order: 2,
  },
  {
    slug: "colorvia",
    name: "Colorvia",
    tagline: {
      ja: "訪れた場所を塗って、進捗が見える地図をつくる。",
      en: "Colour the places you’ve been. Watch the map fill in.",
    },
    description: {
      ja: "国・州・都道府県を塗ることに集中した、訪問記録アプリです。地図そのものが体験です。",
      en: "A visited-places app focused on colouring countries, states, and prefectures. The map is the experience.",
    },
    concept: {
      ja: "訪れた場所",
      en: "Visited places",
    },
    origin: {
      ja: "旅の記録は増えていくのに、自分がどこまで行ったのかは頭の中にしかなかった。一目で分かる形が欲しかった。",
      en: "Travel records piled up, but how far I had actually been existed only in my head. I wanted a form I could take in at a glance.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "colorvia",
    url: appSiteUrl("colorvia"),
    accent: "#55A7A7",
    detail: {
      highlights: {
        ja: [
          "訪れた国を選んで、世界地図を塗る",
          "対応している国では、国内地域まで記録",
          "訪問数などの統計を確認",
          "地名検索、テーマと地図色の変更",
          "JSONで書き出し・読み込み",
        ],
        en: [
          "Colour a world map by marking the countries you have visited",
          "Record sub-national regions where they are supported",
          "See statistics such as how many countries you have visited",
          "Place search, plus theme and map colour options",
          "Export and import your records as JSON",
        ],
      },
      pricing: {
        ja: "無料。ホーム下部にバナー広告が表示される場合があります。アプリ内課金はありません。",
        en: "Free. A banner ad may appear at the bottom of the home screen. No in-app purchases.",
      },
      requirements: {
        ja: "iPhone",
        en: "iPhone",
      },
      privacy: {
        ja: "端末内に保存。アカウント登録は不要です。",
        en: "Stored on your device. No account required.",
      },
    },
    featured: true,
    order: 3,
  },
  {
    slug: "yohaku",
    name: "Yohaku",
    tagline: {
      ja: "予定のあいだに、余白をつくる。",
      en: "Make space between your plans.",
    },
    description: {
      ja: "やることに追われる日常に、小さな休息をつくるアプリです。",
      en: "An app that makes small pockets of rest in a busy day.",
    },
    concept: {
      ja: "余白と沈黙",
      en: "Space & pause",
    },
    origin: {
      ja: "予定のない時間まで、有効活用しようとしてしまう。空けておくには、空白の方を予定として書いておく必要があった。",
      en: "I kept trying to make good use of time that had nothing in it. To leave it open, the emptiness itself had to be written down as a plan.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "yohaku",
    url: appSiteUrl("yohaku"),
    accent: "#6B7280",
    screen: "yohaku-today",
    detail: {
      highlights: {
        ja: [
          "名前と開始・終了時刻で、何もしない時間を今日に置く",
          "今日・週・月の3つの画面で、余白のリズムを振り返る",
          "余白が始まる3〜7分前に、そっと通知",
          "終わったあとに、答えても答えなくてもいい小さな確認",
          "システム／ライト／ダークの外観",
        ],
        en: [
          "Give unplanned time a name, a start and an end",
          "Look back through Today, Week and Month",
          "A quiet notice three to seven minutes before a space begins",
          "One small check-in afterward that you can simply dismiss",
          "System, light or dark appearance",
        ],
      },
      pricing: {
        ja: "無料。控えめなバナー広告が表示されます。買い切り¥400で広告を削除できます。",
        en: "Free with an unobtrusive banner ad. A one-time ¥400 purchase removes ads.",
      },
      requirements: {
        ja: "iPhone・iOS 17以降",
        en: "iPhone, iOS 17 or later",
      },
      privacy: {
        ja: "端末内に保存。アカウント登録は不要です。",
        en: "Stored on your device. No account required.",
      },
      languages: {
        ja: "18言語",
        en: "18 languages",
      },
    },
    featured: true,
    order: 4,
  },
  {
    slug: "soonish",
    name: "Soonish",
    tagline: {
      ja: "保存しておく。あとで、相談できる。",
      en: "Save it now. Consult later.",
    },
    description: {
      ja: "旅のメモを保存・整理し、いつものAIに文脈ごと渡して相談できるアプリです。",
      en: "Save and organise travel notes, then hand your context to the AI you already use.",
    },
    concept: {
      ja: "保存と相談",
      en: "Save & consult",
    },
    origin: {
      ja: "行きたい場所や気になる店のリンクは増えるのに、いざ計画すると文脈が散らばっていてAIにも渡せなかった。",
      en: "Links to places and cafés piled up, but when it was time to plan, the context was too scattered to give any AI.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "soonish",
    // Brand site exists in-repo; subdomain not published yet.
    accent: "#3D6B4F",
    detail: {
      highlights: {
        ja: [
          "リンク・メモ・画像・タスクをひとつに保存",
          "タグとコレクションで旅の文脈を整理",
          "アプリ内AI相談、またはいつものChatGPT / Geminiへ渡す",
          "旅行計画・カフェ選び・買い物比較など毎日の相談シーン",
          "Free / Plus / Team（準備中）のプラン",
          "エクスポートとリマインド連携（Plus）",
        ],
        en: [
          "Save links, notes, images, and tasks in one place",
          "Tags and collections that keep trip context together",
          "In-app AI consult, or hand off to ChatGPT / Gemini",
          "Everyday scenes: trips, cafés, shopping, and more",
          "Free / Plus / Team (coming soon) plans",
          "Export and reminder links on Plus",
        ],
      },
      pricing: {
        ja: "Free ¥0／Plus ¥480（税込¥528）／月。Teamは近日公開予定。",
        en: "Free ¥0 / Plus ¥480 (¥528 tax incl.) per month. Team coming soon.",
      },
      requirements: {
        ja: "iPhone・iOS 17以降",
        en: "iPhone, iOS 17 or later",
      },
      privacy: {
        ja: "保存は端末中心。AI相談時は明示的に渡した内容のみ。",
        en: "Device-first storage. Only what you explicitly send is used for AI consults.",
      },
      languages: {
        ja: "10言語",
        en: "10 languages",
      },
    },
    featured: true,
    order: 5,
  },
  {
    slug: "tana",
    name: "Tana",
    tagline: {
      ja: "本との時間を、もっと豊かに。",
      en: "Make more of the time you spend with books.",
    },
    description: {
      ja: "本棚・読書記録・統計まで。読書体験に寄り添う3つのプランを用意した読書アプリです。",
      en: "Shelves, reading logs, and stats — a reading app with three plans that stay close to how you read.",
    },
    concept: {
      ja: "読書と本棚",
      en: "Reading & shelves",
    },
    origin: {
      ja: "同じ巻をもう一度買った。持っている本が、本棚を見ないと分からない状態だった。",
      en: "I bought the same volume twice. What I already owned was only knowable by standing in front of the shelf.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "tana",
    accent: "#C48E67",
    detail: {
      highlights: {
        ja: [
          "本棚・読書記録・コレクション・統計",
          "Free / Standard / Premium の月額プラン",
          "目標・バックアップ・高度な分析（上位プラン）",
          "CSV / PDF エクスポート",
          "読書のヒントを届ける読みものブログ",
          "11言語対応",
        ],
        en: [
          "Shelves, reading logs, collections, and stats",
          "Free / Standard / Premium monthly plans",
          "Goals, backup, and deeper analysis on higher tiers",
          "CSV / PDF export",
          "Editorial reading blog",
          "11 languages",
        ],
      },
      pricing: {
        ja: "Free ¥0／Standard ¥600（税込¥660）／Premium ¥1,200（税込¥1,320）／月。",
        en: "Free ¥0 / Standard ¥600 (¥660 tax incl.) / Premium ¥1,200 (¥1,320 tax incl.) per month.",
      },
      requirements: {
        ja: "iPhone・iOS 17以降",
        en: "iPhone, iOS 17 or later",
      },
      privacy: {
        ja: "端末内保存を基本とし、上位プランではクラウドバックアップに対応。",
        en: "On-device first; higher plans add cloud backup.",
      },
      languages: {
        ja: "11言語",
        en: "11 languages",
      },
    },
    featured: true,
    order: 6,
  },
  {
    slug: "quiet-solitaire",
    name: "Quiet Solitaire",
    tagline: {
      ja: "自分のペースに合う、静かなカスタマイズ。",
      en: "Quiet customisation at your own pace.",
    },
    description: {
      ja: "カード裏・テーブル・左利き・ヒント・サウンドまで整えられる、落ち着いたクロンダイクです。",
      en: "A calm Klondike with card backs, felt colours, left-handed layout, hints, and soft feedback.",
    },
    concept: {
      ja: "静かなカード",
      en: "Quiet cards",
    },
    origin: {
      ja: "暇つぶしのカードが、いつも騒がしすぎた。音も光も控えめなテーブルが欲しかった。",
      en: "Every solitaire I tried felt too loud. I wanted a quieter table.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "quiet-solitaire",
    accent: "#2F6B4F",
    screen: "quiet-solitaire-game",
    url: appSiteUrl("quiet-solitaire"),
    detail: {
      highlights: {
        ja: [
          "クラシックなクロンダイク・ルール",
          "カード裏テーマとテーブルカラー",
          "左利きレイアウト、ヒント表示、サウンド／ハプティクス",
          "カードサイズ・余白・縦画面レイアウトの調整",
          "アンドゥ、統計、進行中ゲームの端末内保存",
        ],
        en: [
          "Classic Klondike rules",
          "Card-back themes and table colours",
          "Left-handed layout, hints, sound and haptics",
          "Card size, margins, and portrait layout options",
          "Undo, stats, and in-progress games kept on device",
        ],
      },
      pricing: {
        ja: "無料。バナー広告が表示される場合があります。",
        en: "Free. A banner ad may appear.",
      },
      requirements: {
        ja: "iPhone・iOS 26以降",
        en: "iPhone, iOS 26 or later",
      },
      privacy: {
        ja: "ゲームデータは端末内。アカウント登録は不要です。",
        en: "Game data stays on your device. No account required.",
      },
    },
    featured: true,
    order: 7,
  },
  {
    slug: "rough-board",
    name: "Rough Board",
    tagline: {
      ja: "雑な思考を、書いて、置いて、あとでつなぐ。",
      en: "Write fast. Place thoughts. Connect later.",
    },
    description: {
      ja: "下書きを素早く残し、白いボードの上でノードとしてつなげる、ローカルファーストの思考アプリです。",
      en: "A local-first thinking app: capture drafts quickly, then place and link them on a white board.",
    },
    concept: {
      ja: "思考のボード",
      en: "Thinking board",
    },
    origin: {
      ja: "メモは増えるのに、関係が見えない。整理する前に、まず置いてつなぎたかった。",
      en: "Notes piled up without showing how they related. I wanted to place them first, and connect them later.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "rough-board",
    accent: "#2A2A2A",
    detail: {
      highlights: {
        ja: [
          "フルスクリーンの書き込みと自動保存下書き",
          "パン・ピンチ・ドラッグできる白いボード",
          "ノードの配置、分岐、リンク、スリープ／アーカイブ",
          "検索からノードを中央に表示",
          "端末内保存のみ（アカウント・iCloud・広告なし）",
        ],
        en: [
          "Full-screen writing with an autosaving draft",
          "A white board you can pan, pinch and drag",
          "Place, branch, link, sleep or archive nodes",
          "Search and center a node on the board",
          "On-device only — no account, iCloud or ads",
        ],
      },
      pricing: {
        ja: "無料。広告やアプリ内課金はありません。",
        en: "Free. No ads or in-app purchases.",
      },
      requirements: {
        ja: "iPhone・iOS 17以降",
        en: "iPhone, iOS 17 or later",
      },
      privacy: {
        ja: "端末内に保存。アカウント登録は不要です。",
        en: "Stored on your device. No account required.",
      },
      languages: {
        ja: "7言語（英語・日本語・簡体字中国語・韓国語・スペイン語・フランス語・ドイツ語）",
        en: "7 languages (English, Japanese, Simplified Chinese, Korean, Spanish, French, German)",
      },
    },
    featured: true,
    order: 8,
  },
  {
    slug: "doodle",
    name: "Doodle Series",
    tagline: {
      ja: "シンプルなデザインで、毎日をもっと心地よく。",
      en: "Simple design for a calmer everyday.",
    },
    description: {
      ja: "Timer・Calculator・Counter・Stopwatchなど、手描きUIの小さな道具シリーズです。",
      en: "A hand-drawn utility series — Timer, Calculator, Counter, Stopwatch, and friends.",
    },
    concept: {
      ja: "手描きの道具",
      en: "Hand-drawn tools",
    },
    origin: {
      ja: "道具の画面がどれも同じ顔をして見えた。自分の線で数字を書いて、それで動かしたかった。",
      en: "Every utility looked the same. I wanted to write the digits myself, then let them run the tool.",
    },
    status: "developing",
    platform: ["iPhone"],
    iconClass: "doodle",
    accent: "#E86A5C",
    detail: {
      highlights: {
        ja: [
          "Timer / Calculator / Counter / Stopwatch などの独立アプリ",
          "手描きの数字・記号を各アプリで利用",
          "シリーズ共通のアップデート情報とブログ",
          "App Groupで手描きアセットを共有",
          "端末内保存・アカウント不要",
        ],
        en: [
          "Independent apps: Timer, Calculator, Counter, Stopwatch, and more",
          "Hand-drawn digits and symbols across the series",
          "Shared update notes and blog for the series",
          "Doodle assets shared via App Group",
          "On-device storage, no account",
        ],
      },
      pricing: {
        ja: "無料（公開時のApp Store表記を正とします）。",
        en: "Free (the App Store listing will be authoritative at release).",
      },
      requirements: {
        ja: "iPhone・iOS 26以降",
        en: "iPhone, iOS 26 or later",
      },
      privacy: {
        ja: "端末内保存。アカウント登録は不要です。",
        en: "Stored on your device. No account required.",
      },
    },
    featured: true,
    order: 9,
  },
];

/** Apps ordered for display. */
export const orderedApps = [...apps].sort((a, b) => a.order - b.order);

/** Apps by release status — Home and Products treat these differently. */
export const releasedApps = orderedApps.filter((app) => app.status === "released");
export const developingApps = orderedApps.filter((app) => app.status === "developing");
export const conceptApps = orderedApps.filter((app) => app.status === "concept");

/** Featured apps for the home page (max 5). */
export const featuredApps = orderedApps.filter((app) => app.featured).slice(0, 5);
