export type Locale = "ja" | "en";

export type AppStatus = "available" | "comingSoon" | "development";

export interface AppItem {
  slug: string;
  name: string;
  description: Record<Locale, string>;
  status: AppStatus;
  iconClass: string;
  siteUrl: string;
  installUrl?: string;
}

export const apps: AppItem[] = [
  {
    slug: "remeet",
    name: "Remeet",
    description: {
      ja: "また会える日までを、ふたりで待つ。",
      en: "Count down to the day you meet again.",
    },
    status: "development",
    iconClass: "from-sky-200 via-blue-300 to-indigo-400",
    siteUrl: "https://remeet.tmkch.io",
  },
  {
    slug: "tripory",
    name: "Tripory",
    description: {
      ja: "行った国と、旅の記憶を集める。",
      en: "Collect the countries and journeys you remember.",
    },
    status: "comingSoon",
    iconClass: "from-emerald-200 via-teal-300 to-sky-400",
    siteUrl: "https://tripory.tmkch.io",
  },
  {
    slug: "yohaku",
    name: "Yohaku",
    description: {
      ja: "予定ではなく、余白をつくる。",
      en: "Make space, rather than more plans.",
    },
    status: "comingSoon",
    iconClass: "from-stone-100 via-stone-200 to-stone-400",
    siteUrl: "https://yohaku.tmkch.io",
  },
];
