# App Review site

`review.tmkch.io` is the shared App Store review-material site for Tomokichi Studio apps.

## Publication model

- Review recordings are hosted as **YouTube Unlisted** videos.
- A review JSON entry lives under `src/content/reviews/`.
- Only entries with `published: true` generate a public route.
- The public route is `/{app}/{version}/`.
- When a new app version is submitted, set the previous version to `published: false`.
- Old JSON data and YouTube videos are retained as review history.
- There is no public index or archive page.
- `robots.txt` disallows crawling and every rendered page sends `noindex, nofollow`.

With no JSON entries, the app still builds and exposes no review pages.

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

## Deploy

```bash
pnpm --filter @tomokichi/review run deploy
```

Bind the deployed Worker to `review.tmkch.io` in Cloudflare.
