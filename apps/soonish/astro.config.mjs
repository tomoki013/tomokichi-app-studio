import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("soonish"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
