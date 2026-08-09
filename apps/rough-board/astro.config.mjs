import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("rough-board"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
