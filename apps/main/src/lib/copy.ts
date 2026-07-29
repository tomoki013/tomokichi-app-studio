import { footerAppBrands } from "@tomokichi/app-site/apps";
import { SITE_ORIGINS } from "@tomokichi/app-site/urls";
import type { AppStatus, Locale } from "../data/apps";

type L<T = string> = Record<Locale, T>;

/** Shared navigation + footer + status labels ------------------------------ */

export const nav: { label: L; href: string; match: string }[] = [
  { label: { ja: "アプリ", en: "Apps" }, href: "/apps", match: "apps" },
  { label: { ja: "私について", en: "About" }, href: "/about", match: "about" },
  { label: { ja: "サポート", en: "Support" }, href: "/support", match: "support" },
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
    ja: "心地よいプロダクトを、ひとつずつ。",
    en: "Comfortable products, made one at a time.",
  } as L,
  columns: [
    {
      title: { ja: "サイト", en: "Site" } as L,
      links: [
        { label: { ja: "アプリ", en: "Apps" } as L, href: "/apps" },
        { label: { ja: "私について", en: "About" } as L, href: "/about" },
        { label: { ja: "サポート", en: "Support" } as L, href: "/support" },
      ],
    },
    {
      title: { ja: "アプリ", en: "Apps" } as L,
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
    ja: "Tomokichi — 気づかないところまで、丁寧につくる。",
    en: "Tomokichi — Crafted carefully, down to the details.",
  } as L,
  hero: {
    heading: {
      ja: "気づかないところまで、\n丁寧につくる。",
      en: "Crafted carefully,\ndown to the details.",
    } as L,
    body: {
      ja: "Tomokichiは、Webサイトやアプリを通して、\n使う人に余計な負荷をかけず、\n自然に便利を受け取れる体験をつくっています。\n\n必要な機能を、必要な密度で。\n細かな気配りと、少しの遊び心を添えて、\nひとつずつ形にしています。",
      en: "Through websites and apps, Tomokichi builds\nexperiences that let people receive usefulness naturally,\nwithout extra effort.\n\nThe features you need, at the density they need.\nWith quiet attention and a little playfulness,\neach one is shaped one at a time.",
    } as L,
    cta: { ja: "アプリを見る", en: "See the apps" } as L,
    ctaSub: { ja: "私について", en: "About me" } as L,
  },
  appsHeading: { ja: "アプリ", en: "Apps" } as L,
  appsAll: { ja: "すべて見る", en: "View all" } as L,
  about: {
    heading: { ja: "作っている人", en: "The person making these" } as L,
    body: {
      ja: "Tomokichiという名前で、\nWebサイトやiPhoneアプリをつくっています。\n\n旅や記録、日常の道具まで、\nそのプロダクトに必要な形を考えながら、\nひとつずつ制作しています。",
      en: "Under the name Tomokichi, I make\nwebsites and iPhone apps.\n\nFrom travel and records to everyday tools,\nI shape each one while considering\nthe form that product needs.",
    } as L,
    link: { ja: "私について", en: "About me" } as L,
  },
  prefooter: {
    heading: { ja: "つくっているものを見る", en: "See what I’m making" } as L,
    body: {
      ja: "公開中のものから、\nまだ構想の途中にあるものまで。",
      en: "From what’s already out\nto what’s still taking shape.",
    } as L,
  },
};

/** About page --------------------------------------------------------------- */

export const about = {
  metaTitle: { ja: "私について — Tomokichi", en: "About — Tomokichi" } as L,
  metaDescription: {
    ja: "Tomokichiは、使う人に余計な負荷をかけない体験を、ひとつずつ形にしています。",
    en: "Tomokichi shapes experiences that don’t put extra load on the people who use them, one at a time.",
  } as L,
  hero: {
    heading: {
      ja: "気づかないところまで、\n丁寧につくる。",
      en: "Crafted carefully,\ndown to the details.",
    } as L,
    body: {
      ja: "Tomokichiは、Webサイトやアプリを通して、\n使う人に余計な負荷をかけない体験をつくっています。\n\n便利さの先に、静かな心地よさが残ること。\nそれを、ひとつずつ形にしています。",
      en: "Through websites and apps, Tomokichi builds\nexperiences that don’t put extra load on people.\n\nA quiet comfort left beyond convenience —\nthat is what I shape, one at a time.",
    } as L,
  },
  maker: {
    heading: { ja: "作っている人", en: "The person making these" } as L,
    body: {
      ja: "Tomokichiという名前で、\n個人でWebサイトやアプリをつくっています。\n\n旅や記録、日常の小さな感情から、\n便利な道具まで。\nつくるものによって、\n静かな画面にも、機能の詰まった画面にもなります。\n\n共通して大切にしているのは、\n使う人に複雑さを渡さず、\n必要なことが自然にできることです。",
      en: "Under the name Tomokichi, I make\nwebsites and apps on my own.\n\nFrom travel, records and small everyday feelings\nto practical tools.\nDepending on what I’m making, the screen becomes\nquiet, or dense with features.\n\nWhat stays constant is not handing complexity\nto the people who use it — so the necessary things\ncan be done naturally.",
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
    heading: { ja: "つくっているもの", en: "What I’m making" } as L,
    all: { ja: "すべてのアプリを見る", en: "See all apps" } as L,
  },
  bottom: {
    apps: {
      heading: { ja: "アプリを見る", en: "See the apps" } as L,
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

/** Apps page ---------------------------------------------------------------- */

export const appsPage = {
  metaTitle: { ja: "つくっているもの。 — Tomokichi", en: "What I’m making — Tomokichi" } as L,
  metaDescription: {
    ja: "旅、記録、日常の道具。使う人が自然に便利を受け取れることを大切にしています。",
    en: "Travel, records, everyday tools — made so people receive usefulness naturally.",
  } as L,
  hero: {
    heading: { ja: "つくっているもの。", en: "What I’m making." } as L,
    body: {
      ja: "旅、記録、日常の道具。\n\n役割も見た目もそれぞれですが、\n使う人が自然に便利を受け取れることを\n大切にしています。\n\n公開中のものから、\nまだ構想の途中にあるものまで紹介します。",
      en: "Travel, records, everyday tools.\n\nEach has its own role and look, but they share\none thing: people receive usefulness naturally.\n\nFrom what’s already out\nto what’s still taking shape.",
    } as L,
  },
  filters: [
    { key: "all", label: { ja: "すべて", en: "All" } as L },
    { key: "released", label: { ja: "公開中", en: "Available" } as L },
    { key: "developing", label: { ja: "開発中", en: "In development" } as L },
    { key: "concept", label: { ja: "構想中", en: "Concept" } as L },
  ],
  soon: { ja: "準備中", en: "Coming soon" } as L,
  visit: { ja: "アプリサイトを見る", en: "Visit app site" } as L,
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
