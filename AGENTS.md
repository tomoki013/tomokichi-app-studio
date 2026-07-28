# App brand sites

For every app-specific brand site under `apps/*`, follow the shared conventions in
[`docs/app-brand-sites.md`](docs/app-brand-sites.md).

New brand sites must use `@tomokichi/app-site/AppSiteShell.astro` for the shared
header, footer, locale navigation, compact-on-scroll behaviour, mobile menu, SEO
metadata, and reveal behaviour. Do not create another app-local copy of this shell.

Landing-page heroes must use `@tomokichi/app-site/AppHeroChrome.astro` for the
Scroll affordance and dated news bar.
