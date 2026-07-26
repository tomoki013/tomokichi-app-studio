import { describe, expect, it } from "vitest";

import { supportHref } from "./links";

describe("Remeet support link", () => {
  it("links Japanese visitors to the shared Remeet form", () => {
    expect(supportHref("ja")).toBe(
      "https://tomokichi-main.tomoki-ttttt.workers.dev/support?app=remeet",
    );
  });

  it("links English visitors to the English shared form", () => {
    expect(supportHref("en")).toBe(
      "https://tomokichi-main.tomoki-ttttt.workers.dev/en/support?app=remeet",
    );
  });
});
