import { defineAppI18n } from "@tomokichi/app-site/i18n";
import en from "./en";
import ja from "./ja";

export const i18n = defineAppI18n({
  defaultLocale: "en",
  translations: { en, ja },
});

export type Locale = (typeof i18n.supportedLocales)[number];
