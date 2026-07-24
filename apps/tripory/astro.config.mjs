import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tripory.tmkch.io",
  vite: { plugins: [tailwindcss()] },
});
