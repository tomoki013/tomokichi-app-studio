import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tmkch.io",
  // English is served from the root; Japanese lives under /ja.
  // The old /en/* URLs, and the retired Principles page, redirect accordingly.
  redirects: {
    "/principles": "/about#approach",
    "/philosophy": "/about#approach",
    "/ja/principles": "/ja/about#approach",
    "/ja/philosophy": "/ja/about#approach",
    "/en": "/",
    "/en/principles": "/about#approach",
    "/en/philosophy": "/about#approach",
    "/en/apps": "/apps",
    "/en/about": "/about",
    "/en/privacy": "/privacy",
    "/en/terms": "/terms",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
