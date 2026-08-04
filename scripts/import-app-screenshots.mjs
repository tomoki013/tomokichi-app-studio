#!/usr/bin/env node

/*
 * Imports real iOS Simulator captures into a brand site.
 *
 * The capture pipelines live in the app repos (`AppStoreScreenshotTests` in
 * each, run against iPhone 17 Pro Max) and write full-resolution 1320x2868
 * PNGs — the files submitted to App Store Connect. Those stay where they are.
 * A brand site needs something far smaller: the widest a screen is ever laid
 * out on these pages is ~323 CSS px, so anything past `--width` is pixels
 * nobody sees. Sources land as WebP because several of these screens are
 * photographic, where PNG costs megabytes for no visible gain.
 *
 *   node scripts/import-app-screenshots.mjs yohaku ~/dev/projects/yohaku/AppStore/Screenshots/generated --only ja,en
 *
 * Source files are matched as `<lang>-<nn>-<name>.png` and land in
 * `src/assets/screens/` as `<lang>-<name>.webp`, where Astro resizes them per
 * breakpoint at build time. `--only` picks the languages a site renders; the
 * brand sites are bilingual even where the app ships eighteen languages.
 *
 * The main site gathers screens from every app into one folder, so it passes
 * `--prefix <app>` to keep names apart and `--keep` so each run adds to the
 * folder instead of replacing it.
 */

import { mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { basename, join, resolve } from "node:path";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : args[index + 1];
};
const has = (name) => args.includes(`--${name}`);
const positional = args.filter((arg, i) => !arg.startsWith("--") && !args[i - 1]?.startsWith("--"));

const [slug, sourceDir] = positional;
if (!slug || !sourceDir) {
  console.error(
    "usage: import-app-screenshots.mjs <dest-slug> <source-dir> [--only ja,en] [--prefix name] [--keep] [--width 990] [--quality 90]",
  );
  process.exit(1);
}

const width = Number(flag("width", "990"));
const quality = Number(flag("quality", "90"));
const only = flag("only", "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
// The main site collects screens from several apps into one folder, so it needs
// a per-app filename prefix and must not wipe what a previous run imported.
const prefix = flag("prefix", "");
const keep = has("keep");

const source = resolve(sourceDir.replace(/^~/, process.env.HOME ?? "~"));
const appDir = resolve(`apps/${slug}`);
const destination = join(appDir, "src/assets/screens");

if (!statSync(source, { throwIfNoEntry: false })?.isDirectory()) {
  console.error(`no such directory: ${source}`);
  process.exit(1);
}
if (!statSync(appDir, { throwIfNoEntry: false })?.isDirectory()) {
  console.error(`no such app: ${appDir}`);
  process.exit(1);
}

// The same sharp the site's own image pipeline uses, so imports and builds
// cannot disagree about how a screenshot is resampled.
const require = createRequire(join(appDir, "package.json"));
let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error(
    `sharp is not installed in apps/${slug}. Run: pnpm --filter @tomokichi/${slug} add sharp`,
  );
  process.exit(1);
}

if (!keep) rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });

const pattern = /^(?<lang>[a-zA-Z-]+)-\d+-(?<name>[a-z0-9-]+)\.png$/;
const imported = [];

for (const file of readdirSync(source).sort()) {
  const match = pattern.exec(basename(file));
  if (!match) continue;
  const { lang, name } = match.groups;
  if (only.length && !only.includes(lang)) continue;

  const stem = prefix ? `${prefix}-${lang}-${name}` : `${lang}-${name}`;
  const out = join(destination, `${stem}.webp`);
  await sharp(join(source, file)).resize({ width }).webp({ quality, effort: 6 }).toFile(out);
  imported.push([`${stem}.webp`, statSync(out).size]);
}

const total = imported.reduce((sum, [, size]) => sum + size, 0);
console.log(
  `imported ${imported.length} screenshots into apps/${slug}/src/assets/screens (${width}px wide, ${(total / 1024).toFixed(0)}kB total)`,
);
for (const [name, size] of imported) console.log(`  ${name} — ${(size / 1024).toFixed(0)}kB`);
