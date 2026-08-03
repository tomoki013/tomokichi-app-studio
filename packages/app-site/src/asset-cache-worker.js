/**
 * Thin Worker in front of static assets: long-cache hashed/static files,
 * short revalidation for HTML so deploys show up quickly.
 */
const LONG_CACHE = "public, max-age=31536000, immutable";
const HTML_CACHE = "public, max-age=300, must-revalidate";
const SHORT_CACHE = "public, max-age=3600, must-revalidate";

const LONG_EXT =
  /\.(?:css|js|mjs|map|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|mp4|webm|txt)$/i;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (!response || response.status === 404) return response;

    const url = new URL(request.url);
    const path = url.pathname;
    const headers = new Headers(response.headers);

    if (path.startsWith("/_astro/") || LONG_EXT.test(path)) {
      headers.set("Cache-Control", LONG_CACHE);
    } else if (path.endsWith(".html") || path.endsWith("/") || !path.includes(".")) {
      headers.set("Cache-Control", HTML_CACHE);
    } else {
      headers.set("Cache-Control", SHORT_CACHE);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
