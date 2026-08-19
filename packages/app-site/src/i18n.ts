export type AppSiteTextDirection = "ltr" | "rtl";

export type AppSiteLocaleMeta = {
  /** BCP 47 language tag used by html[lang] and hreflang. */
  code: string;
  /** Human-readable native label shown in expanded language menus. */
  label: string;
  /** Compact label used in the header trigger. */
  shortLabel: string;
  /** Open Graph locale, e.g. en_US or ja_JP. */
  ogLocale?: string;
  /** Text direction for the locale. */
  dir?: AppSiteTextDirection;
};

export type AppSiteLocaleLink = AppSiteLocaleMeta & {
  /** Localized URL for the same logical page. */
  href: string;
};

export type AppSiteShellLabels = {
  home: string;
  mainNavigation: string;
  language: string;
  skipToContent: string;
};

const localePresets: Record<string, Omit<AppSiteLocaleMeta, "code">> = {
  en: { label: "English", shortLabel: "EN", ogLocale: "en_US", dir: "ltr" },
  ja: { label: "日本語", shortLabel: "JA", ogLocale: "ja_JP", dir: "ltr" },
  fr: { label: "Français", shortLabel: "FR", ogLocale: "fr_FR", dir: "ltr" },
  de: { label: "Deutsch", shortLabel: "DE", ogLocale: "de_DE", dir: "ltr" },
  es: { label: "Español", shortLabel: "ES", ogLocale: "es_ES", dir: "ltr" },
  it: { label: "Italiano", shortLabel: "IT", ogLocale: "it_IT", dir: "ltr" },
  ko: { label: "한국어", shortLabel: "KO", ogLocale: "ko_KR", dir: "ltr" },
  "zh-Hans": { label: "简体中文", shortLabel: "简中", ogLocale: "zh_CN", dir: "ltr" },
  "zh-Hant": { label: "繁體中文", shortLabel: "繁中", ogLocale: "zh_TW", dir: "ltr" },
  pt: { label: "Português", shortLabel: "PT", ogLocale: "pt_PT", dir: "ltr" },
  "pt-BR": { label: "Português (Brasil)", shortLabel: "PT", ogLocale: "pt_BR", dir: "ltr" },
  id: { label: "Bahasa Indonesia", shortLabel: "ID", ogLocale: "id_ID", dir: "ltr" },
  vi: { label: "Tiếng Việt", shortLabel: "VI", ogLocale: "vi_VN", dir: "ltr" },
  th: { label: "ไทย", shortLabel: "TH", ogLocale: "th_TH", dir: "ltr" },
  ar: { label: "العربية", shortLabel: "AR", ogLocale: "ar_AR", dir: "rtl" },
};

export const defaultShellLabels: Record<string, AppSiteShellLabels> = {
  en: {
    home: "Home",
    mainNavigation: "Main navigation",
    language: "Language",
    skipToContent: "Skip to content",
  },
  ja: {
    home: "ホーム",
    mainNavigation: "メインナビゲーション",
    language: "言語",
    skipToContent: "本文へスキップ",
  },
};

export function localeMeta(
  code: string,
  overrides: Partial<Omit<AppSiteLocaleMeta, "code">> = {},
): AppSiteLocaleMeta {
  const preset = localePresets[code];
  return {
    code,
    label: overrides.label ?? preset?.label ?? code,
    shortLabel: overrides.shortLabel ?? preset?.shortLabel ?? code.toUpperCase(),
    ogLocale: overrides.ogLocale ?? preset?.ogLocale,
    dir: overrides.dir ?? preset?.dir ?? "ltr",
  };
}

export function localizedPageHref(locale: string, defaultLocale: string, page = ""): string {
  const normalizedPage = page.replace(/^\/+|\/+$/g, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const path = `${prefix}${normalizedPage ? `/${normalizedPage}` : ""}`;
  return path || "/";
}

type TranslationMap = Record<string, unknown>;
type TranslationLocale<TTranslations extends TranslationMap> = Extract<keyof TTranslations, string>;

type DefineAppI18nOptions<TTranslations extends TranslationMap> = {
  /** Default locale is served without a locale prefix. */
  defaultLocale: TranslationLocale<TTranslations>;
  /** The keys are the locales supported by this app site. */
  translations: TTranslations;
  /** Optional display/metadata overrides for individual locales. */
  localeMeta?: Partial<
    Record<TranslationLocale<TTranslations>, Partial<Omit<AppSiteLocaleMeta, "code">>>
  >;
};

/**
 * Defines the i18n registry for one app brand site.
 *
 * The translation object is intentionally the source of truth for supported
 * locales. Adding a language therefore means adding its translation file,
 * importing it, and adding one key to `translations`.
 */
export function defineAppI18n<const TTranslations extends TranslationMap>(
  options: DefineAppI18nOptions<TTranslations>,
) {
  type Locale = TranslationLocale<TTranslations>;

  const supportedLocales = Object.keys(options.translations) as Locale[];
  if (!supportedLocales.includes(options.defaultLocale)) {
    throw new Error(`Default locale "${options.defaultLocale}" is missing from translations.`);
  }

  const metas = Object.fromEntries(
    supportedLocales.map((code) => [code, localeMeta(code, options.localeMeta?.[code])]),
  ) as Record<Locale, AppSiteLocaleMeta>;

  const getLocale = (value: string | undefined): Locale =>
    supportedLocales.includes(value as Locale) ? (value as Locale) : options.defaultLocale;

  const t = (locale: string | undefined): TTranslations[Locale] =>
    options.translations[getLocale(locale)] as TTranslations[Locale];

  const href = (locale: Locale, page = "") =>
    localizedPageHref(locale, options.defaultLocale, page);

  const localeLinks = (page = ""): AppSiteLocaleLink[] =>
    supportedLocales.map((code) => ({ ...metas[code], href: href(code, page) }));

  return {
    defaultLocale: options.defaultLocale,
    supportedLocales,
    translations: options.translations,
    metas,
    getLocale,
    t,
    href,
    localeLinks,
  } as const;
}
