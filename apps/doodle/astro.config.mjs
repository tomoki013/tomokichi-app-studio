import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("doodle"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
