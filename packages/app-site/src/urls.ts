export type SiteLocale = "ja" | "en";

export const SITE_ORIGINS = {
  main: "https://tmkch.io",
  personal: "https://tomokichi.dev",
  github: "https://github.com/tomoki013",
  services: {
    supportApi: {
      public: "https://api.tmkch.io",
      workers: "https://tomokichi-api.tomoki-ttttt.workers.dev",
    },
  },
  workers: {
    main: "https://tomokichi-main.tomoki-ttttt.workers.dev",
  },
  apps: {
    remeet: {
      public: "https://remeet.tmkch.io",
      workers: "https://tomokichi-remeet.tomoki-ttttt.workers.dev",
    },
    tripory: {
      public: "https://tripory.tmkch.io",
      workers: "https://tomokichi-tripory.tomoki-ttttt.workers.dev",
    },
    colorvia: {
      public: "https://colorvia.tmkch.io",
      workers: "https://tomokichi-colorvia.tomoki-ttttt.workers.dev",
    },
    yohaku: {
      public: "https://yohaku.tmkch.io",
      workers: "https://tomokichi-yohaku.tomoki-ttttt.workers.dev",
    },
    "quiet-solitaire": {
      public: "https://solitaire.tmkch.io",
      workers: "https://tomokichi-quiet-solitaire.tomoki-ttttt.workers.dev",
    },
  },
} as const;

const normalizePath = (path: string) => {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
};

export function mainSiteUrl(locale: SiteLocale, path = ""): string {
  const localePrefix = locale === "ja" ? "/ja" : "";
  return `${SITE_ORIGINS.main}${localePrefix}${normalizePath(path)}`;
}

export function supportUrl(app: string, locale: SiteLocale): string {
  const url = new URL(mainSiteUrl(locale, "/support"));
  url.searchParams.set("app", app);
  return url.toString();
}

export function appSiteUrl(app: string): string {
  return (
    SITE_ORIGINS.apps[app as keyof typeof SITE_ORIGINS.apps]?.public ?? `https://${app}.tmkch.io`
  );
}

export function appSiteWorkersUrl(app: string): string {
  return (
    SITE_ORIGINS.apps[app as keyof typeof SITE_ORIGINS.apps]?.workers ??
    `https://tomokichi-${app}.tomoki-ttttt.workers.dev`
  );
}

/** Public URL to register in product metadata and future DNS configuration. */
export const SUPPORT_API_PUBLIC_URL = `${SITE_ORIGINS.services.supportApi.public}/api/v1/support`;

/** Canonical support endpoint served through the API custom domain. */
export const SUPPORT_API_URL = SUPPORT_API_PUBLIC_URL;
