/// <reference types="vitest/config" />

import { getViteConfig } from "astro/config";

export default getViteConfig({
  // The subsetted OG fonts are Data modules to wrangler; to vite they are just
  // bytes. Without this, importing the Worker from a test fails while vite
  // tries to parse a font as JavaScript.
  assetsInclude: ["**/*.bin"],
  resolve: {
    alias: {
      "@resvg/resvg-wasm/index_bg.wasm": new URL("./test/resvg-wasm-stub.ts", import.meta.url)
        .pathname,
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
