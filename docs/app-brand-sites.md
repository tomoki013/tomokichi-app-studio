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
