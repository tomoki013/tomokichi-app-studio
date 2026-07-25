import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tmkch.io",
  redirects: {
    "/principles": "/about#approach",
    "/philosophy": "/about#approach",
    "/en/principles": "/en/about#approach",
    "/en/philosophy": "/en/about#approach",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
