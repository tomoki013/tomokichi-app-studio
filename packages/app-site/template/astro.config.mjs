import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("__APP_SLUG__"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
