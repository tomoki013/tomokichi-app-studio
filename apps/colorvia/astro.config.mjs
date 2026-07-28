import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://colorvia.tmkch.io",
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
    "/contact": "https://tmkch.io/support?app=colorvia",
    "/ja/contact": "https://tmkch.io/ja/support?app=colorvia",
  },
  vite: { plugins: [tailwindcss()] },
});
