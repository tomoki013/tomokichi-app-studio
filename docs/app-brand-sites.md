# App brand site conventions

This document defines the shared structure for Tomokichi app landing pages.

## Shared shell

- Use `@tomokichi/app-site/AppSiteShell.astro`.
- English is served from `/`; Japanese is served from `/ja`.
- Keep the app logo at the left, primary product navigation in the centre, and
  locale plus App Store actions at the right.
- The header remains sticky. After 96px of scrolling it contracts into a compact
  brand pill; hover or keyboard focus expands it so navigation remains available.
- Mobile keeps a full-width compact header and an accessible menu button.
- Use the standard four footer columns: Product, Support, Legal, and Tomokichi.
- Contact links open the shared Tomokichi support form with the app query parameter.

### App-specific theming

The shared components own structure and behaviour, but app styles may override
their presentation. Prefer the public custom properties so overrides remain
stable when the shared markup changes:

```css
:root {
  --app-site-ink: #18343a;
  --app-site-accent: #55a7a7;
  --app-site-page-background: #fbfdfc;
  --app-site-header-foreground: #18343a;
  --app-site-header-background: rgb(255 255 255 / 82%);
  --app-site-header-compact-background: rgb(255 255 255 / 90%);
  --app-site-store-background: #fff;
  --app-site-footer-background: #17383d;
  --app-site-footer-foreground: #fff;
  --app-site-footer-link: #c5d4d5;
  --app-site-hero-muted: #667b7e;
  --app-site-notice-background: rgb(255 255 255 / 72%);
}
```

Header borders and shadows, logo shadows, mobile menu colours, footer text
colours, and news-bar hover colours also have matching
`--app-site-*` properties in `app-site-shell.css`. Direct selectors such as
`.app-site-header` and `.app-site-footer` may be overridden when an app needs a
layout variation that cannot be expressed by the theme properties. Scope those
rules through the app's `pageClass` (for example,
`.my-app-page .app-site-header`) so the app override wins regardless of CSS
import order.

## Landing-page hero

- The first viewport must communicate the app, not generic website chrome.
- Include the primary statement, supporting copy, App Store CTA, and a real or
  representative product visual.
- Include a centred `Scroll` affordance with a subtle animated track.
- Include a dated news bar at the bottom of the hero linking to the app’s updates page.
- Render both elements with `@tomokichi/app-site/AppHeroChrome.astro`.
- Leave enough bottom clearance so the scroll affordance and news bar never overlap.

## Required pages

- Privacy Policy and Terms of Service must contain product-specific, internally
  consistent content and effective dates.
- Contact must lead to the working shared support form with the correct app selected.
- Features, usage, screenshots, FAQ, and updates may be mock content until product
  details are final, but links and responsive layouts must work.

## Quality

- Support English and Japanese on every route.
- Preserve keyboard navigation, reduced-motion behaviour, and mobile layouts.
- Run the app check and production build before handoff.

## Creating a new app site

Run the scaffold command from the workspace root:

```sh
pnpm create:app-site <slug> "<Brand name>"
```

The command chooses the next free local port, creates the bilingual Astro site,
installs the shared shell and hero chrome, adds the standard navigation and
footer structure, creates the required routes, registers the app in the shared
support/footer registry, and updates the lockfile. Registered sites use
`https://<slug>.tmkch.io` as their public URL and keep the corresponding
`workers.dev` deployment URL alongside it. Pass `--port <port>` to choose a port
or `--no-install` to skip the lockfile update.

The same generator is available as `mise run create-app-site -- <slug> "<Brand name>"`.
