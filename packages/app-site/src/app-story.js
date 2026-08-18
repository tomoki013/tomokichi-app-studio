/**
 * Fallback for browsers without scroll-driven CSS animations.
 *
 * Where `animation-timeline: view()` is supported the stylesheet owns the whole
 * effect and this module returns immediately. Otherwise it recomputes the same
 * transforms from scroll position, reading every beat's geometry before writing
 * any style so one frame never forces repeated layout.
 */

const MOBILE = "(max-width: 760px)";
const REDUCE = "(prefers-reduced-motion: reduce)";
const PIN = 88;
const NATIVE_SCROLL = typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");

/** @type {Array<{track: HTMLElement, visual: HTMLElement, copy: HTMLElement, side: 1 | -1, shift: number, start: number, travel: number, last: string}>} */
const beats = [];
let bound = false;
let ticking = false;
let mobile = false;
let reduce = false;

const clamp01 = (value) => Math.min(1, Math.max(0, value));

const smootherstep = (value) => {
  const t = clamp01(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

const measure = (beat) => {
  const stage = beat.visual.parentElement;
  const visualWidth = beat.visual.getBoundingClientRect().width;
  const pin = beat.track.firstElementChild;
  beat.shift = stage
    ? Math.min(stage.clientWidth * 0.29, stage.clientWidth / 2 - visualWidth / 2 - 40)
    : 0;
  beat.start = beat.track.getBoundingClientRect().top + window.scrollY;
  beat.travel = Math.max(
    1,
    beat.track.offsetHeight - (pin?.offsetHeight ?? window.innerHeight - PIN),
  );
};

const progressFor = (beat, scroll, view) => {
  if (beat.start > scroll + view) return null;
  return clamp01((scroll + PIN - beat.start) / beat.travel);
};

const write = (beat, progress) => {
  // The visual is present from the start and only moves horizontally.
  const shift = smootherstep((progress - 0.3) / 0.42);
  const text = smootherstep((progress - 0.5) / 0.28);
  const state = `${shift.toFixed(3)}:${text.toFixed(3)}`;
  if (state === beat.last) return;
  beat.last = state;

  const x = (beat.side * beat.shift * shift).toFixed(2);
  beat.visual.style.transform = `translate3d(calc(-50% + ${x}px), -50%, 0)`;
  beat.copy.style.opacity = text.toFixed(3);
  beat.copy.style.transform = `translate3d(0, calc(-50% + ${((1 - text) * 14).toFixed(2)}px), 0)`;
};

const sync = () => {
  ticking = false;
  if (!beats.length || mobile || reduce) return;
  const view = window.innerHeight || 1;
  const scroll = window.scrollY;
  const updates = [];
  for (const beat of beats) {
    const progress = progressFor(beat, scroll, view);
    if (progress !== null) updates.push([beat, progress]);
  }
  for (const [beat, progress] of updates) {
    write(beat, progress);
  }
};

const requestSync = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(sync);
};

const media = () => {
  mobile = matchMedia(MOBILE).matches;
  reduce = matchMedia(REDUCE).matches;
};

const collect = () => {
  beats.length = 0;
  document.querySelectorAll(".app-story").forEach((story) => {
    story.classList.toggle("is-story-ready", !mobile && !reduce);
  });
  document.querySelectorAll("[data-beat]").forEach((root) => {
    const track = root.querySelector("[data-beat-track]");
    const visual = root.querySelector("[data-beat-visual]");
    const copy = root.querySelector("[data-beat-copy]");
    if (!track || !visual || !copy) return;
    visual.style.removeProperty("transform");
    visual.style.removeProperty("opacity");
    copy.style.removeProperty("transform");
    copy.style.removeProperty("opacity");
    const beat = {
      track,
      visual,
      copy,
      side: root.dataset.side === "end" ? 1 : -1,
      shift: 0,
      start: 0,
      travel: 1,
      last: "",
    };
    measure(beat);
    beats.push(beat);
  });
};

const refresh = () => {
  media();
  collect();
  requestSync();
};

export const initAppStory = () => {
  media();
  if (NATIVE_SCROLL) return;
  collect();
  if (mobile || reduce) return;
  if (!bound) {
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    matchMedia(MOBILE).addEventListener("change", refresh);
    matchMedia(REDUCE).addEventListener("change", refresh);
    bound = true;
  }
  requestSync();
};

document.addEventListener("astro:page-load", initAppStory);
initAppStory();
