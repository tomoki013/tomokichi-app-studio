/**
 * The picture a messaging app draws beside a Remeet invitation, rendered per
 * request so the countdown on it is never stale.
 *
 * The static `invite-preview.png` says nothing about the reunion, on purpose —
 * a link preview is drawn by somebody else's software, on somebody else's
 * screen, often in a group chat the invitation was forwarded to. This image
 * says more, and everything extra it says is bounded:
 *
 * - **The countdown, always.** How long two people have left is the one thing
 *   an invitation is about, and "in about three weeks" identifies nobody.
 * - **The two place names, only when the person sending it asked for them.**
 *   Off by default, chosen per invitation in the app. The API simply has no
 *   labels to return unless they were sent.
 *
 * The exact reunion date never leaves the API: it returns a number of days,
 * computed server-side, so neither this Worker nor the picture can be worked
 * backwards into a calendar entry.
 */
/**
 * Bumped whenever the drawing changes.
 *
 * Messaging apps cache preview images for as long as they like and this URL is
 * otherwise stable per invitation, so a redraw that does not move the URL is a
 * redraw nobody sees.
 */
export const OG_VERSION = "1";

export interface OGReunion {
  /** Whole days until the reunion. Negative is treated as "today". */
  daysRemaining: number;
  /** Present only when the inviter chose to show them. */
  origin?: string;
  destination?: string;
}

export interface OGCopy {
  lang: "ja" | "en";
  /** Sits above the number — "次に会えるまで" / "UNTIL THEY MEET". */
  caption: string;
  /** Follows the number — "日" / "DAYS". */
  unit: (days: number) => string;
  /** Replaces the countdown when the day has come. */
  today: string;
  tagline: string[];
}

export const OG_JA: OGCopy = {
  lang: "ja",
  caption: "次に会えるまで",
  unit: () => "日",
  today: "今日",
  tagline: ["次に会う日まで、", "一緒に待とう。"],
};

export const OG_EN: OGCopy = {
  lang: "en",
  caption: "UNTIL THEY MEET",
  unit: (days) => (days === 1 ? "DAY" : "DAYS"),
  today: "TODAY",
  tagline: ["Wait for the next time", "you meet, together."],
};

export function ogCopy(acceptLanguage: string | null): OGCopy {
  return acceptLanguage?.toLowerCase().includes("ja") ? OG_JA : OG_EN;
}

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Whether every character of a label can actually be drawn.
 *
 * The font in the bundle is a subset — a full Japanese face is most of a
 * Worker's size budget — so a place name can contain a character resvg has no
 * glyph for, and resvg draws those as nothing at all. Dropping the label is the
 * honest outcome: a preview short one line still reads, a preview with a row of
 * blank boxes in it looks broken.
 */
export function isDrawable(label: string, coverage: string): boolean {
  const covered = new Set([...coverage]);
  return [...label].every((character) => covered.has(character));
}

/** Trimmed, length-capped, and safe to drop into SVG text. */
function label(value: string | undefined, coverage: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  const clipped = [...trimmed].slice(0, 18).join("");
  if (!isDrawable(clipped, coverage)) return null;
  return escapeXML(clipped);
}

function escapeXML(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * The SVG the picture is rasterized from.
 *
 * Deliberately the same idiom as `scripts/build-invite-preview.mjs` and as the
 * app's own Home screen — two places, an arc between them, something crossing
 * it — so an invitation looks like the app it opens.
 */
export function inviteOGSVG(reunion: OGReunion, copy: OGCopy, coverage: string): string {
  const origin = label(reunion.origin, coverage);
  const destination = label(reunion.destination, coverage);
  const hasPlaces = origin !== null && destination !== null;
  const days = Math.max(0, Math.round(reunion.daysRemaining));
  const isToday = days === 0;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bcd9ee"/>
      <stop offset="34%" stop-color="#f3dcc6"/>
      <stop offset="66%" stop-color="#f9cfa4"/>
      <stop offset="100%" stop-color="#f6bd8b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="98%" r="60%">
      <stop offset="0%" stop-color="#fffaf0" stop-opacity="0.95"/>
      <stop offset="55%" stop-color="#ffeccf" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#ffeccf" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#sky)"/>
  <ellipse cx="600" cy="600" rx="620" ry="330" fill="url(#glow)"/>

  <g fill="#ffffff" opacity="0.38">
    <ellipse cx="214" cy="104" rx="112" ry="21"/>
    <ellipse cx="278" cy="128" rx="138" ry="16"/>
    <ellipse cx="978" cy="88" rx="120" ry="20"/>
    <ellipse cx="928" cy="112" rx="82" ry="13"/>
  </g>

  <text x="600" y="196" text-anchor="middle" font-family="Noto Serif JP"
        font-size="96" fill="#2f2016" letter-spacing="4">Remeet <tspan fill="#dd7f42">&#9825;</tspan></text>

  <text x="600" y="268" text-anchor="middle" font-family="Noto Sans JP"
        font-size="30" fill="#4a382d" letter-spacing="6">${escapeXML(copy.tagline[0])}</text>
  <text x="600" y="314" text-anchor="middle" font-family="Noto Sans JP"
        font-size="30" fill="#4a382d" letter-spacing="6">${escapeXML(copy.tagline[1])}</text>

  <!-- The route. Its ends carry the two place names only when the invitation
       said they may; the arc itself is the same shape either way, so an
       invitation that keeps its places private is not visibly a lesser one. -->
  <path d="M300 528 C 450 392, 750 392, 900 528"
        fill="none" stroke="#c8794a" stroke-opacity="0.55"
        stroke-width="4" stroke-linecap="round" stroke-dasharray="2 18"/>
  <g transform="translate(600 401) rotate(90)" fill="#4a2f1c">
    <path d="M0 -26 L7 -7 L26 2 L26 9 L7 5 L3 21 L12 26 L12 30 L0 26 L-12 30
             L-12 26 L-3 21 L-7 5 L-26 9 L-26 2 L-7 -7 Z"/>
  </g>
  ${pin(300, 528)}
  ${pin(900, 528)}
  ${hasPlaces ? placeLabels(origin, destination) : ""}

  <text x="600" y="516" text-anchor="middle" font-family="Noto Sans JP"
        font-size="23" fill="#7d6553" letter-spacing="3">${escapeXML(copy.caption)}</text>
  ${
    isToday
      ? `<text x="600" y="582" text-anchor="middle" font-family="Noto Serif JP"
        font-size="62" fill="#2f2016">${escapeXML(copy.today)}</text>`
      : `<text x="600" y="586" text-anchor="middle" font-family="Noto Serif JP" font-size="66" fill="#2f2016"
        >${days} <tspan font-size="34" fill="#4a382d">${escapeXML(copy.unit(days))}</tspan></text>`
  }
</svg>`;
}

function pin(x: number, y: number): string {
  return `<g transform="translate(${x} ${y})">
    <path d="M0 4 C -19 -22, -26 -33, -26 -46 A 26 26 0 1 1 26 -46 C 26 -33, 19 -22, 0 4 Z"
          fill="#f0a35f"/>
    <circle cx="0" cy="-46" r="10" fill="#fff6ec"/>
  </g>`;
}

function placeLabels(origin: string, destination: string): string {
  return `<text x="300" y="576" text-anchor="middle" font-family="Noto Sans JP"
        font-size="27" fill="#4a382d">${origin}</text>
  <text x="900" y="576" text-anchor="middle" font-family="Noto Sans JP"
        font-size="27" fill="#4a382d">${destination}</text>`;
}
