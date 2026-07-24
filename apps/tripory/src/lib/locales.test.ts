import { describe, expect, it } from "vitest";
import { defaultLocale, locales } from "./locales";

describe("locales", () => {
  it("uses Japanese as the default locale", () => expect(defaultLocale).toBe("ja"));
  it("supports Japanese and English", () => expect(locales).toEqual(["ja", "en"]));
});
