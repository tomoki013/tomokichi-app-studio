import { describe, expect, it } from "vitest";

import { app } from "./index";

describe("GET /api/health", () => {
  it("returns the API status", async () => {
    const response = await app.request("https://tmkch.io/api/health");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      service: "tomokichi-api",
    });
  });
});
