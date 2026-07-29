import { supportUrl } from "@tomokichi/app-site/urls";
import type { Locale } from "./locales";

export function supportHref(locale: Locale): string {
  return supportUrl("remeet", locale);
}
