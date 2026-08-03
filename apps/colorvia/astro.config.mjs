import tailwindcss from "@tailwindcss/vite";
import { appSiteUrl, supportUrl } from "@tomokichi/app-site/urls";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: appSiteUrl("colorvia"),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
    "/contact": supportUrl("colorvia", "en"),
    "/ja/contact": supportUrl("colorvia", "ja"),
  },
  vite: { plugins: [tailwindcss()] },
});
