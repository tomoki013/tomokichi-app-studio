import type { Locale } from "./locales";

const MAIN_SUPPORT_ORIGIN = "https://tomokichi-main.tomoki-ttttt.workers.dev";

export function supportHref(locale: Locale): string {
  const path = locale === "ja" ? "/support" : "/en/support";
  return `${MAIN_SUPPORT_ORIGIN}${path}?app=remeet`;
}
