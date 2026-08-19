# Remeet — brand site and invitation entrance

An Astro site on Cloudflare Workers Static Assets, plus a small Worker for the
two paths that are not pages.

| Path | What it is |
|---|---|
| `GET /i/{token}` | the page an invitation opens on a phone with no Remeet on it |
| `GET /.well-known/apple-app-site-association` | what makes `/i/*` open the app |
| everything else | the site, through the shared asset-cache Worker |

Worker source: `src/worker/`.

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Astro dev server on `localhost:4322` |
| `pnpm build` | Build the site to `./dist/` |
| `pnpm check` | `astro check` — also type-checks the Worker |
| `pnpm test` | Vitest, including the landing-page tests |
| `pnpm preview:cloudflare` | Build, then run the real Worker locally |
| `pnpm deploy` | Build and deploy to Cloudflare |

## The invitation entrance

This side is the half of the invitation system people see: the URL they send
each other, the preview a messaging app draws, and the page the link opens
before Remeet exists on the phone. It holds **no database, no key and no
invitation data** — those live behind `api.tmkch.io/remeet/v1`, which this
Worker asks only for the code to display (`/invites/preview`, which cannot
return a CKShare URL at all).

That separation is deliberate: `remeet.tmkch.io/i/{token}` is a permanent
public interface, and it should survive any change to whatever implements
invitations underneath it.

### Configuration

| | |
|---|---|
| `INVITE_API_ORIGIN` (var) | `https://api.tmkch.io` |
| `INVITE_CLIENT_KEY` (secret) | the same value the app sends, so the API can ignore traffic that is neither |
| `APPLE_APP_ID` (var) | `<Team ID>.<bundle id>`, written into the associated-domains file |
| `APP_STORE_URL` (var) | empty until Remeet is on the App Store; the landing page's button falls back to this site |

At release, `APP_STORE_URL` becomes `https://apps.apple.com/app/id6798387704`
followed by `pnpm deploy`. It is left empty until then on purpose: that URL
404s until the app is actually released, and a button to the site beats a
button to nothing.

```bash
openssl rand -hex 24 | pnpm exec wrangler secret put INVITE_CLIENT_KEY   # must match the API's
```

### The preview picture

`public/assets/invite-preview.png` is drawn by `scripts/build-invite-preview.mjs`
and committed. After re-running it, **bump `PREVIEW_VERSION` in
`src/worker/invite/landing.ts`** — the site serves images as `immutable` for a
year and link previews are cached by the apps that drew them, so the URL has to
change or nobody sees the new one. A test fails if any reference to the image
is left without the version.

### Checking a deployment

```bash
curl -s https://remeet.tmkch.io/.well-known/apple-app-site-association
curl -s https://remeet.tmkch.io/i/anything-at-all | head -20
```

The landing page renders whether or not the invitation is real — it says where
to get the app either way, and simply has no code to show when the API does not
hand one back.

## The site itself

Pages live in `src/pages`, content helpers in `src/lib`, and the shared shell
comes from `@tomokichi/app-site`. See the repository README for the monorepo
layout and the deployment workflow.
