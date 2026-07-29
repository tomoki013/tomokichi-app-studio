import { appSiteUrl } from "@tomokichi/app-site/urls";

export type Locale = "ja" | "en";

export type AppStatus = "released" | "developing" | "concept";

export interface AppItem {
  slug: string;
  name: string;
  /** One-line copy shown on cards. */
  tagline: Record<Locale, string>;
  /** 2–3 line description shown on the large (Apps page) cards. */
  description: Record<Locale, string>;
  status: AppStatus;
  platform: string[];
  /** CSS gradient class used by <AppIcon> (see global.css). */
  iconClass: string;
  /** Screenshot / preview fragment. */
  previewImage?: string;
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
    status: "developing",
    platform: ["iPhone"],
    iconClass: "remeet",
    previewImage: "/assets/app-remeet.png",
    url: appSiteUrl("remeet"),
    accent: "#8EB5D4",
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
    status: "developing",
    platform: ["iPhone"],
    iconClass: "tripory",
    previewImage: "/assets/app-tripory.png",
    url: appSiteUrl("tripory"),
    accent: "#5F9E7F",
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
    status: "developing",
    platform: ["iPhone"],
    iconClass: "colorvia",
    url: appSiteUrl("colorvia"),
    accent: "#55A7A7",
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
    status: "concept",
    platform: ["iPhone"],
    iconClass: "soonish",
    previewImage: "/assets/app-soonish.png",
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
    status: "developing",
    platform: ["iPhone"],
    iconClass: "yohaku",
    previewImage: "/assets/app-yohaku.png",
    url: appSiteUrl("yohaku"),
    accent: "#6B7280",
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
    status: "concept",
    platform: ["iPhone"],
    iconClass: "tana",
    previewImage: "/assets/app-tana.png",
    accent: "#C48E67",
    featured: true,
    order: 6,
  },
];

/** Apps ordered for display. */
export const orderedApps = [...apps].sort((a, b) => a.order - b.order);

/** Featured apps for the home page (max 5). */
export const featuredApps = orderedApps.filter((app) => app.featured).slice(0, 5);
