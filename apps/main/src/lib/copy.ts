import { footerAppBrands } from "@tomokichi/app-site/apps";
import { SITE_ORIGINS } from "@tomokichi/app-site/urls";
import type { AppStatus, Locale } from "../data/apps";

type L<T = string> = Record<Locale, T>;

/** Shared navigation + footer + status labels ------------------------------ */

/**
 * Support, privacy and terms deliberately live in the footer instead: the main
 * nav follows the studio's own order — what was noticed, what it became, who
 * made it.
 */
export const nav: { label: L; href: string; match: string }[] = [
  { label: { ja: "つくったもの", en: "Products" }, href: "/products", match: "products" },
  { label: { ja: "私について", en: "About" }, href: "/about", match: "about" },
];

export interface FooterLink {
  label: L;
  href: string;
  /** External links open in a new tab and skip the locale prefix. */
  external?: boolean;
}

export const footer: {
  tagline: L;
  columns: { title: L; links: FooterLink[] }[];
  copyright: string;
} = {
  tagline: {
    ja: "日常で感じたことを、形にする。",
    en: "Turning what I notice into something.",
  } as L,
  columns: [
    {
      title: { ja: "サイト", en: "Site" } as L,
      links: [
        { label: { ja: "記録", en: "Journal" } as L, href: "/journal" },
        { label: { ja: "つくったもの", en: "Products" } as L, href: "/products" },
        { label: { ja: "私について", en: "About" } as L, href: "/about" },
        { label: { ja: "サポート", en: "Support" } as L, href: "/support" },
      ],
    },
    {
      title: { ja: "つくったもの", en: "Products" } as L,
      links: footerAppBrands.map((app) => ({
        label: { ja: app.name, en: app.name } as L,
        href: app.publicUrl,
        external: true,
      })),
    },
    {
      title: { ja: "規約", en: "Legal" } as L,
      links: [
        { label: { ja: "プライバシー", en: "Privacy" } as L, href: "/privacy" },
        { label: { ja: "利用規約", en: "Terms" } as L, href: "/terms" },
      ],
    },
    {
      title: { ja: "連絡先", en: "Contact" } as L,
      links: [
        {
          label: { ja: "アプリのサポート", en: "App support" } as L,
          href: "/support",
        },
        {
          label: { ja: "仕事のご相談", en: "Work enquiries" } as L,
          href: `${SITE_ORIGINS.personal}/contact`,
          external: true,
        },
      ],
    },
  ],
  copyright: "© 2026 Tomokichi. All rights reserved.",
};

export const statusLabel: Record<AppStatus, L> = {
  released: { ja: "公開中", en: "Available" },
  developing: { ja: "開発中", en: "In development" },
  concept: { ja: "構想中", en: "Concept" },
};

/** The four things kept in mind while making — shared by Home and About. ---- */

export const principles: { title: L; body: L }[] = [
  {
    title: { ja: "丁寧な技術", en: "Careful engineering" },
    body: {
      ja: "見えない部分まで、誠実に。\n長く安心して使えるものに。",
      en: "Honest work, down to the parts no one sees —\nso it stays dependable for a long time.",
    },
  },
  {
    title: { ja: "複雑さを渡さない", en: "No complexity passed on" },
    body: {
      ja: "技術や設定の難しさを、\n使う人に押しつけません。",
      en: "The difficulty of technology and settings\nis never handed to the people who use it.",
    },
  },
  {
    title: { ja: "ちょうどいい密度", en: "The right density" },
    body: {
      ja: "少ないことを正解にせず、\nそのプロダクトに必要な機能と情報量を選びます。",
      en: "Less isn’t automatically better; each product gets\nthe amount of features and information it needs.",
    },
  },
  {
    title: { ja: "小さな遊び心", en: "A little playfulness" },
    body: {
      ja: "主役ではなくても、\nふと気づく楽しさをどこかに残します。",
      en: "Never the main act, but a small moment of delight\nis left somewhere to be found.",
    },
  },
];

export const principlesHeading: L = { ja: "つくるときに考えていること", en: "What I keep in mind" };

/** Home page ---------------------------------------------------------------- */

export const home = {
  metaTitle: {
    ja: "Tomokichi — 日常で感じたことを、形にする。",
    en: "Tomokichi — Turning what I notice into something.",
  } as L,
  hero: {
    heading: {
      ja: "日常で感じたことを、\n形にする。",
      en: "Turning what I notice\ninto something.",
    } as L,
    body: {
      ja: "暮らしや旅、人との関わりの中で感じたことから、\nアプリやWebサイト、小さな企画をつくる個人スタジオです。\n\nはじめからアプリを作るのではなく、まず日常を観察する。\nそこで見つけた問いに向き合い、必要な形を考える。\nアプリは、そのための手段の一つです。",
      en: "A one-person studio that makes apps, websites and small\nprojects out of things noticed in daily life, travel and\nthe people around me.\n\nAn app is never the starting point. I watch ordinary life\nfirst, sit with the question I find there, and then work out\nwhat form it needs. An app is one of those forms.",
    } as L,
    cta: { ja: "最近の記録を見る", en: "Read the journal" } as L,
    ctaSub: { ja: "つくったものを見る", en: "See what came of it" } as L,
  },
  currentHeading: { ja: "今、考えていること", en: "What I’m thinking about now" } as L,
  journalHeading: { ja: "日々の記録", en: "Recent notes" } as L,
  journalAll: { ja: "記録をすべて見る", en: "Read all notes" } as L,
  appsHeading: { ja: "日常から生まれたもの", en: "What came out of it" } as L,
  appsAvailableHeading: { ja: "公開中", en: "Available now" } as L,
  appsMakingHeading: { ja: "いまつくっているもの", en: "Currently making" } as L,
  appsAll: { ja: "すべて見る", en: "View all" } as L,
  about: {
    heading: { ja: "作っている人", en: "The person making these" } as L,
    body: {
      ja: "Tomokichiという名前で、日常の中で感じたことを記録し、\nアプリやWebサイト、小さな企画として形にしています。\n\n旅や街、暮らし、人との関係。\n自分自身が体験したことから始め、\nその問いに合った形を一つずつ考えています。",
      en: "Under the name Tomokichi, I write down what I notice\nin daily life and shape it into apps, websites and\nsmall projects.\n\nTravel, cities, living, the people around me.\nEach one starts from something I went through myself,\nand takes whatever form that question needs.",
    } as L,
    link: { ja: "私について", en: "About me" } as L,
  },
  prefooter: {
    heading: { ja: "つくったものを見る", en: "See what I’m making" } as L,
    body: {
      ja: "公開中のものから、\nまだ構想の途中にあるものまで。",
      en: "From what’s already out\nto what’s still taking shape.",
    } as L,
  },
};

/** Journal ------------------------------------------------------------------ */

export const journal = {
  metaTitle: { ja: "記録 — Tomokichi", en: "Journal — Tomokichi" } as L,
  metaDescription: {
    ja: "日常で感じたこと、制作につながる問い、小さな実験の記録。",
    en: "Things noticed in daily life, the questions behind what I make, and small experiments.",
  } as L,
  hero: {
    heading: { ja: "記録", en: "Journal" } as L,
    body: {
      ja: "日常で感じたこと、そこから考えたこと、\n小さく試したことを書いています。\n\nすべてが何かの形になるわけではありません。\n作らなかったものも、ここに残しています。",
      en: "Things noticed in ordinary life, what I made of them,\nand what I tried in a small way.\n\nNot all of it turns into something.\nWhat I decided not to build stays here too.",
    } as L,
  },
  empty: { ja: "まだ記録がありません。", en: "No entries yet." } as L,
  readMore: { ja: "続きを読む", en: "Read on" } as L,
  back: { ja: "記録の一覧へ", en: "Back to the journal" } as L,
  /** Shown on an entry, pointing at what it led to. */
  bornFrom: { ja: "この記録から生まれたもの", en: "What came of this" } as L,
  alsoRead: { ja: "あわせて読む", en: "Read next" } as L,
  /** Shown on a product, pointing back at the records behind it. */
  behindProduct: { ja: "このプロダクトが生まれるまで", en: "How this came about" } as L,
};

/** About page --------------------------------------------------------------- */

export const about = {
  metaTitle: { ja: "私について — Tomokichi", en: "About — Tomokichi" } as L,
  metaDescription: {
    ja: "日常で感じたことから、アプリやWebサイト、小さな企画をつくる個人スタジオです。",
    en: "A one-person studio making apps, websites and small projects out of what it notices in daily life.",
  } as L,
  hero: {
    heading: {
      ja: "日常で感じたことを、\n形にする。",
      en: "Turning what I notice\ninto something.",
    } as L,
    body: {
      ja: "Tomokichi App Studioは、暮らしや旅、人との関わりの中で\n感じたことから、アプリやWebサイト、小さな企画をつくる個人スタジオです。\n\nアプリを作ること自体が目的ではありません。\nまず日常を観察し、そこで見つけた問いに向き合い、\n必要な形を考える。その手段の一つがアプリです。",
      en: "Tomokichi App Studio is a one-person studio that makes\napps, websites and small projects out of what it notices\nin living, travelling and being around people.\n\nMaking apps is not the point. I watch ordinary life first,\nsit with the question I find there, and work out what form\nit needs. An app is one of those forms.",
    } as L,
  },
  concept: {
    heading: { ja: "このスタジオについて", en: "About this studio" } as L,
    items: [
      {
        title: { ja: "日常から始める", en: "Start from daily life" } as L,
        body: {
          ja: "違和感、不便、願い、寂しさ、好奇心。\n出発点は、いつも自分が体験したことです。",
          en: "Something off, something awkward, a wish, a loneliness,\na curiosity. It always starts from something I lived through.",
        } as L,
      },
      {
        title: { ja: "アプリを目的にしない", en: "An app is not the goal" } as L,
        body: {
          ja: "アプリ、Web、文章、企画。\n問いに合う形を選ぶだけで、形の方は決めていません。",
          en: "An app, a website, a piece of writing, a plan.\nI choose whatever fits the question; the form is not decided in advance.",
        } as L,
      },
      {
        title: { ja: "小さく試す", en: "Try it small" } as L,
        body: {
          ja: "まず自分で試して、続くかどうかを見ます。\n作らないという結論も、同じくらい多いです。",
          en: "I try it on myself first and see whether it lasts.\nDeciding not to build is just as common an outcome.",
        } as L,
      },
      {
        title: { ja: "過程も残す", en: "Keep the process" } as L,
        body: {
          ja: "完成したものだけでなく、\nその手前で考えていたことも記録に残しています。",
          en: "Not only what got finished, but what I was thinking\nbefore it did, stays in the journal.",
        } as L,
      },
    ],
  },
  maker: {
    heading: { ja: "作っている人", en: "The person making these" } as L,
    body: {
      ja: "Tomokichiという名前で、日常の中で感じたことを記録し、\nアプリやWebサイト、小さな企画として形にしています。\n\n旅や街、暮らし、人との関係。\n自分自身が体験したことから始め、\nその問いに合った形を一つずつ考えています。\n\nつくるものによって、静かな画面にも、\n機能の詰まった画面にもなります。\n共通しているのは、使う人に複雑さを渡さないことです。",
      en: "Under the name Tomokichi, I write down what I notice in\ndaily life and shape it into apps, websites and small projects.\n\nTravel, cities, living, the people around me.\nEach one starts from something I went through myself,\nand takes whatever form that question needs.\n\nDepending on what I’m making, the screen becomes quiet,\nor dense with features. What stays constant is not handing\ncomplexity to the people who use it.",
    } as L,
    location: "Kyoto / Tokyo",
    linksLabel: {
      website: { ja: "Website", en: "Website" } as L,
      github: { ja: "GitHub", en: "GitHub" } as L,
      contact: { ja: "Contact", en: "Contact" } as L,
    },
  },
  now: {
    heading: { ja: "今のTomokichiについて", en: "Tomokichi, right now" } as L,
    body: {
      ja: "表現は、そのときの空気や技術に合わせて\n変わっていくものだと考えています。\n\n人間らしさや静けさを強く出す時期もあれば、\nもっと機能的で密度の高い形が\n似合うこともあります。\n\nそれでも変わらないのは、\n丁寧な技術、細やかな気配り、\nそして使う人に余計な複雑さを渡さないことです。\n\n遊び心も、主役でなくても、\nどこかに残していきます。",
      en: "How things are expressed changes\nwith the mood and technology of the time.\n\nSome periods lean into warmth and quiet;\nother times a more functional, denser form\nsuits better.\n\nWhat doesn’t change is careful engineering,\nquiet attention, and never handing extra\ncomplexity to the people who use it.\n\nPlayfulness, too — never the lead — is\nkept somewhere along the way.",
    } as L,
  },
  making: {
    heading: { ja: "つくったもの", en: "What I’ve made" } as L,
    all: { ja: "すべて見る", en: "See all" } as L,
  },
  bottom: {
    apps: {
      heading: { ja: "つくったものを見る", en: "See what I’ve made" } as L,
      body: {
        ja: "公開中のものから、\nまだ構想の途中にあるものまで。",
        en: "From what’s already out\nto what’s still taking shape.",
      } as L,
    },
    support: {
      heading: { ja: "サポートを見る", en: "Get support" } as L,
      body: {
        ja: "アプリについてのよくある質問や、\nお問い合わせはこちら。",
        en: "Common questions about the apps\nand how to get in touch.",
      } as L,
    },
  },
};

/** Products page ------------------------------------------------------------ */

export const appsPage = {
  metaTitle: { ja: "つくったもの。 — Tomokichi", en: "What I’ve made — Tomokichi" } as L,
  metaDescription: {
    ja: "日常で感じたことから生まれた、アプリと小さな企画。公開中と開発中を分けて、それぞれの世界観を探索できます。",
    en: "Apps and small projects born from daily life — explore available releases and work in progress, each with its own world.",
  } as L,
  hero: {
    heading: { ja: "つくったもの。", en: "What I’ve made." } as L,
    body: {
      ja: "どれも、日常の中で気になったことから始まっています。\n\n公開済みのものと、いま手がけているものを分けて並べています。\n雰囲気の違いごと、公式サイトへ進めます。",
      en: "Every one of these started from something\nthat caught my attention in ordinary life.\n\nAvailable apps and work in progress are kept apart\nso you can explore each world, then open its site.",
    } as L,
  },
  sections: {
    available: { ja: "公開中", en: "Available now" } as L,
    developing: { ja: "開発中", en: "In development" } as L,
    concept: { ja: "構想中", en: "Concept" } as L,
  },
  filters: [
    { key: "all", label: { ja: "すべて", en: "All" } as L },
    { key: "released", label: { ja: "公開中", en: "Available" } as L },
    { key: "developing", label: { ja: "開発中", en: "In development" } as L },
    { key: "concept", label: { ja: "構想中", en: "Concept" } as L },
  ],
  soon: { ja: "準備中", en: "Coming soon" } as L,
  visit: { ja: "公式サイトを見る", en: "Explore site" } as L,
  origin: { ja: "はじまり", en: "Where it started" } as L,
  emptySection: { ja: "まだありません。", en: "Nothing here yet." } as L,
  spec: {
    highlights: { ja: "できること", en: "What it does" } as L,
    pricing: { ja: "料金", en: "Price" } as L,
    requirements: { ja: "対応", en: "Requires" } as L,
    privacy: { ja: "データ", en: "Data" } as L,
    languages: { ja: "言語", en: "Languages" } as L,
  },
  bottom: {
    heading: { ja: "アプリについて困ったときは", en: "If you need help with an app" } as L,
    body: {
      ja: "使い方や不具合、\n各アプリについての連絡は\nサポートページから受け付けています。",
      en: "How-to, bugs, and anything about each app\nare handled from the support page.",
    } as L,
    cta: { ja: "サポートを見る", en: "Get support" } as L,
  },
};

/** Support / legal ---------------------------------------------------------- */

export const support = {
  metaTitle: { ja: "お問い合わせ — Tomokichi", en: "Support — Tomokichi" } as L,
  heading: { ja: "お問い合わせ", en: "Support" } as L,
  body: {
    ja: "Tomokichiのアプリに関する不具合、ご質問、ご意見は、共通のお問い合わせフォームからお送りください。",
    en: "Send questions, bug reports, or feedback about Tomokichi apps through the shared support form.",
  } as L,
  personal: {
    ja: "お仕事のご相談や個人へのお問い合わせは、tomokichi.dev/contact からお願いします。",
    en: "For work enquiries or personal contact, please use tomokichi.dev/contact.",
  } as L,
  appsCta: { ja: "アプリ一覧を見る", en: "View all apps" } as L,
};

export const legal = {
  privacy: {
    metaTitle: { ja: "プライバシー — Tomokichi", en: "Privacy — Tomokichi" } as L,
    heading: { ja: "プライバシーについて", en: "Privacy" } as L,
    body: {
      ja: "各アプリ固有のプライバシーポリシーは、それぞれのアプリサイトに掲載しています。\n\nお問い合わせフォームを送信した場合に限り、名前（入力した場合）、メールアドレス、お問い合わせ内容、対象アプリ、問い合わせカテゴリ、表示言語、ランダムに生成された問い合わせ識別子、送信日時、スパム対策とレート制限に必要な技術情報を取得します。フォームを送信しない限り、これらの問い合わせ情報は送信されません。\n\n取得した情報は、お問い合わせへの回答、不具合の調査、サービス改善、不正利用や大量送信の防止に利用します。問い合わせは専用データベースへ保存せず、メールとして受信します。\n\n問い合わせ受付APIの実行基盤としてCloudflare Workersを、メール配送のためResendを利用します。これらのサービスでは、各社の方針に従って情報が処理されます。",
      en: "Privacy policies specific to each app are published on the respective app website.\n\nOnly when you submit the support form do we collect your name (if provided), email address, message, selected app, enquiry category, display language, a randomly generated enquiry identifier, submission time, and technical information needed for spam prevention and rate limiting. This support information is not sent unless you submit the form.\n\nWe use this information to respond, investigate issues, improve our services, and prevent abuse or excessive submissions. Enquiries are received by email and are not stored in a dedicated support database.\n\nCloudflare Workers provides the support API infrastructure, and Resend delivers the email. Information is processed under each provider’s policies.",
    } as L,
  },
  terms: {
    metaTitle: { ja: "利用規約 — Tomokichi", en: "Terms — Tomokichi" } as L,
    heading: { ja: "利用規約について", en: "Terms" } as L,
    body: {
      ja: "各アプリの利用規約は、それぞれのアプリサイトに掲載しています。\n本サイト（tmkch.io）は、つくっているものを紹介するためのものです。",
      en: "Each app’s terms of service are published on that app’s own site.\nThis site (tmkch.io) exists to introduce what is being made.",
    } as L,
  },
};
