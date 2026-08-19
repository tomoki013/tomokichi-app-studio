/**
 * The Cloudflare bindings the Remeet site's Worker needs.
 *
 * Short, and meant to stay short: the invitation *data* lives behind
 * `api.tmkch.io`, so this side holds no database, no secret and no key — only
 * where to ask. Declared by hand rather than pulled from
 * `@cloudflare/workers-types` because `astro check` type-checks everything
 * under `src/` and this app has no second type system installed for it.
 */
export interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

export interface WorkerEnv {
  ASSETS: AssetFetcher;
  /** Where the invite API lives: `https://api.tmkch.io`. */
  INVITE_API_ORIGIN?: string;
  /**
   * The same value the app sends, so the invite API can ignore everything that
   * is neither Remeet nor this page. A Worker secret, not a var — it is a weak
   * filter rather than a credential, but there is no reason to print it in a
   * config file either.
   */
  INVITE_CLIENT_KEY?: string;
  APP_STORE_URL?: string;
  /** `<Team ID>.<bundle identifier>`, for the associated-domains file. */
  APPLE_APP_ID?: string;
}
