import {
  notificationNumberText,
  pendingLabel,
  telecommunicationsRows,
} from "@tomokichi/app-site/telecommunications";
import { describe, expect, it } from "vitest";

describe("telecommunications notification number", () => {
  it("says the number is still awaited until a non-blank one is set", () => {
    expect(notificationNumberText(null, pendingLabel("ja"))).toBe("通知待ち");
    expect(notificationNumberText(undefined, pendingLabel("en"))).toBe("Awaiting notification");
    // A blank value is no number, so no row is ever empty.
    expect(notificationNumberText("   ", pendingLabel("ja"))).toBe("通知待ち");
    expect(notificationNumberText("A-01-23456", pendingLabel("ja"))).toBe("A-01-23456");
  });
});

describe("telecommunications rows", () => {
  it("does not call the operator a registered carrier in English", () => {
    const terms = telecommunicationsRows("en", "Remeet")
      .map((row) => row.term)
      .join(" ");
    expect(terms.toLowerCase()).not.toContain("registered");
  });
});
