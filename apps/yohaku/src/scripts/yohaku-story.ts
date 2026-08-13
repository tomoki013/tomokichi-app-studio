type Beat = {
  track: HTMLElement;
  visual: HTMLElement;
  copy: HTMLElement;
  side: 1 | -1;
  shift: number;
  start: number;
  travel: number;
  last: string;
};

const MOBILE = "(max-width: 760px)";
const REDUCE = "(prefers-reduced-motion: reduce)";
const PIN = 88;
const NATIVE_SCROLL = typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");

const beats: Beat[] = [];
let bound = false;
let ticking = false;
let mobile = false;
let reduce = false;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const smootherstep = (value: number) => {
  const t = clamp01(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

const measure = (beat: Beat) => {
  const stage = beat.visual.parentElement;
  const visualWidth = beat.visual.getBoundingClientRect().width;
  const pin = beat.track.firstElementChild as HTMLElement | null;
  beat.shift = stage
    ? Math.min(stage.clientWidth * 0.235, stage.clientWidth / 2 - visualWidth / 2 - 40)
    : 0;
  beat.start = beat.track.getBoundingClientRect().top + window.scrollY;
  beat.travel = Math.max(
    1,
    beat.track.offsetHeight - (pin?.offsetHeight ?? window.innerHeight - PIN),
  );
};

const progressFor = (beat: Beat, scroll: number, view: number) => {
  if (beat.start > scroll + view) return null;
  return clamp01((scroll + PIN - beat.start) / beat.travel);
};

const write = (beat: Beat, progress: number) => {
  // The photograph is present from the start and only moves horizontally.
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
  const updates: Array<[Beat, number]> = [];
  for (const beat of beats) {
    const progress = progressFor(beat, scroll, view);
    if (progress !== null) updates.push([beat, progress]);
  }
  // All geometry reads happen before any style write, so scrolling never
  // forces repeated layout calculations within the same frame.
  for (const [beat, progress] of updates) {
    write(beat, progress);
  }
};

const requestSync = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(sync);
};

const refresh = () => {
  media();
  collect();
  requestSync();
};

const collect = () => {
  beats.length = 0;
  document.querySelectorAll<HTMLElement>(".yohaku-story").forEach((story) => {
    story.classList.toggle("is-story-ready", !mobile && !reduce);
  });
  document.querySelectorAll<HTMLElement>("[data-y-beat]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-y-track]");
    const visual = root.querySelector<HTMLElement>("[data-y-visual]");
    const copy = root.querySelector<HTMLElement>("[data-y-copy]");
    if (!track || !visual || !copy) return;
    visual.style.removeProperty("transform");
    visual.style.removeProperty("opacity");
    copy.style.removeProperty("transform");
    copy.style.removeProperty("opacity");
    const beat: Beat = {
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

const media = () => {
  mobile = matchMedia(MOBILE).matches;
  reduce = matchMedia(REDUCE).matches;
};

export const initYohakuStory = () => {
  media();
  if (NATIVE_SCROLL) return;
  collect();
  if (mobile || reduce) return;
  if (!bound) {
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        refresh();
      },
      { passive: true },
    );
    matchMedia(MOBILE).addEventListener("change", refresh);
    matchMedia(REDUCE).addEventListener("change", refresh);
    bound = true;
  }
  requestSync();
};

document.addEventListener("astro:page-load", initYohakuStory);
initYohakuStory();
