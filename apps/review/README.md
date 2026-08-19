# App Review site

`review.tmkch.io` is the shared App Store review-material site for Tomokichi Studio apps.

The site intentionally uses a dependency-free Node.js static generator instead of adding another framework workspace to the monorepo. Review recordings themselves are hosted as **YouTube Unlisted** videos.

## Publication model

- Review JSON entries live under `src/reviews/`.
- Only entries with `published: true` generate a public route.
- At most one version may be published per app; the build fails if two versions of the same app are public.
- The public route is `/{app}/{version}/`.
- When a new app version is submitted, set the previous version to `published: false`.
- Old JSON data and YouTube videos are retained as review history.
- There is no public index or archive page.
- `robots.txt` disallows crawling and every rendered page uses `noindex, nofollow`.

With no JSON entries, the site still builds successfully and exposes no review pages.

## Review data shape

```json
{
  "app": "yohaku",
  "appName": "Yohaku",
  "version": "1.0.0",
  "build": "3",
  "published": true,
  "youtubeId": "YouTubeVideoId",
  "device": "iPhone",
  "os": "iOS 26",
  "recordedAt": "2026-08-20",
  "features": ["App launch", "Main flow"],
  "notes": "No account or login is required."
}
```

The example above is documentation only; no review JSON is committed by the foundation setup.

## Build

```bash
pnpm build:review
```

## Deploy

```bash
pnpm deploy:review
```

The Cloudflare Worker should be bound to `review.tmkch.io`.
