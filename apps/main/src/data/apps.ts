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
        ja: "端末内に保存。アカウント登録は不要です。",
        en: "Stored on your device. No account required.",
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
      ja: "旅した場所と記憶を、自分だけの地図に。",
      en: "Turn the places you travel into a map of your own.",
    },
    description: {
      ja: "訪れた国や都市、旅ごとの記録を残せるアプリです。",
      en: "An app for keeping the countries, cities and trips you have travelled.",
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
    detail: {
      highlights: {
        ja: [
          "訪問済み・行きたい国をステータスで管理",
          "旅ごとの記録（タイトル・訪問先・日付・メモ）",
          "旅の記録に写真を添付",
          "住んでいる国の設定と履歴",
        ],
        en: [
          "Track countries as visited or want to go",
          "Keep a record per trip: title, places, dates and notes",
          "Attach photos to a trip",
          "Set the country you live in, and keep its history",
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
      ja: "訪れた国で、自分だけの世界地図を彩る。",
      en: "Colour a world map with the places you visit.",
    },
    description: {
      ja: "訪れた国を選ぶだけで、旅の広がりを静かに記録できるアプリです。",
      en: "A quiet way to record how your travels grow, one visited country at a time.",
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
    slug: "soonish",
    name: "Soonish",
    tagline: {
      ja: "いつかやりたいことを、忘れずに残す。",
      en: "Keep the things you want to do someday.",
    },
    description: {
      ja: "今すぐではないけれど、いつか叶えたいことを集めるアプリです。",
      en: "An app for collecting the things you hope to do — just not right now.",
    },
    origin: {
      ja: "「いつかやりたい」と思ったことは、その場では覚えているつもりでも、翌週には思い出せない。",
      en: "Things I thought I’d do someday felt unforgettable at the time, and were gone by the following week.",
    },
    status: "concept",
    platform: ["iPhone"],
    iconClass: "soonish",
    accent: "#E2A0C4",
    featured: true,
    order: 4,
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
    order: 5,
  },
  {
    slug: "tana",
    name: "Tana",
    tagline: {
      ja: "本棚にある本を、静かに整理する。",
      en: "Quietly organise the books on your shelf.",
    },
    description: {
      ja: "持っている巻数や、読みたい本を記録できるアプリです。",
      en: "An app for recording the volumes you own and the books you want to read.",
    },
    origin: {
      ja: "同じ巻をもう一度買った。持っている本が、本棚を見ないと分からない状態だった。",
      en: "I bought the same volume twice. What I already owned was only knowable by standing in front of the shelf.",
    },
    status: "concept",
    platform: ["iPhone"],
    iconClass: "tana",
    accent: "#C48E67",
    featured: true,
    order: 6,
  },
];

/** Apps ordered for display. */
export const orderedApps = [...apps].sort((a, b) => a.order - b.order);

/** Featured apps for the home page (max 5). */
export const featuredApps = orderedApps.filter((app) => app.featured).slice(0, 5);
