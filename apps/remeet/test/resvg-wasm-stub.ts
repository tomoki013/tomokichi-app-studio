/**
 * Stands in for `@resvg/resvg-wasm/index_bg.wasm` under vitest.
 *
 * wrangler bundles that import as a WebAssembly module, which is what the
 * Worker needs and what vite has no loader for — importing the Worker from a
 * test would otherwise fail while vite tried to resolve the wasm's own
 * `wbg` imports. Nothing under test rasterizes anything: the drawing is a pure
 * function checked in `og.test.ts`, and rendering itself is verified against
 * workerd (see docs).
 */
export default {} as unknown as WebAssembly.Module;
