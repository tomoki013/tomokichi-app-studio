/**
 * SVG → PNG, inside a Worker.
 *
 * Two things make this less trivial than it looks. The wasm module has to be
 * initialised exactly once per isolate — `initWasm` throws if it is called
 * again — and resvg draws no text at all unless it is handed font bytes, since
 * workerd has no system fonts. Both are handled here so the drawing code above
 * stays a pure function of its inputs.
 */
import { initWasm, Resvg } from "@resvg/resvg-wasm";
// @ts-expect-error - wasm module, resolved by wrangler
import wasm from "@resvg/resvg-wasm/index_bg.wasm";

let ready: Promise<void> | null = null;

function initialise(): Promise<void> {
  // Kept as the promise rather than a boolean: two requests can arrive in the
  // same isolate before the first has finished initialising, and the second
  // must wait rather than start a second `initWasm`.
  ready ??= initWasm(wasm as WebAssembly.Module);
  return ready;
}

export interface RasterOptions {
  fonts: ArrayBuffer[];
  width: number;
}

export async function renderPNG(svg: string, { fonts, width }: RasterOptions): Promise<Uint8Array> {
  await initialise();
  const resvg = new Resvg(svg, {
    background: "rgba(255, 255, 255, 1)",
    fitTo: { mode: "width", value: width },
    font: {
      fontBuffers: fonts.map((font) => new Uint8Array(font)),
      // Nothing may fall back to a system font, because there is none: an
      // unresolved family would silently render as an empty box.
      loadSystemFonts: false,
      defaultFontFamily: "Noto Sans JP",
    },
  });
  return resvg.render().asPng();
}
