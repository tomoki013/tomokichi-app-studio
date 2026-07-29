import { describe, expect, it } from "vitest";

import { supportHref } from "./links";

describe("Remeet support link", () => {
  it("links Japanese visitors to the shared Remeet form", () => {
    expect(supportHref("ja")).toBe("https://tmkch.io/ja/support?app=remeet");
  });

  it("links English visitors to the English shared form", () => {
    expect(supportHref("en")).toBe("https://tmkch.io/support?app=remeet");
  });
});
