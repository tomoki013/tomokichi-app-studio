import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("yohaku"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
