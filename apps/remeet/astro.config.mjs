import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://remeet.tmkch.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
