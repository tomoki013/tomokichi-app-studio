import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tripory.tmkch.io",
  // English is now served from the root; the old /en/* URLs redirect to it.
  redirects: {
    "/en": "/",
    "/en/[page]": "/[page]",
  },
  vite: { plugins: [tailwindcss()] },
});
