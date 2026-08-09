import { appSiteUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("quiet-solitaire"),
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
});
