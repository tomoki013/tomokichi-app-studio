import { describe, expect, it, vi } from "vitest";

import {
  buildSupportRequest,
  getOrCreateClientId,
  initialSelections,
  SUPPORT_CLIENT_ID_KEY,
  type SupportFormValues,
  SupportRequestCycle,
  showsReplyToggle,
  statusForApiResponse,
  validateSupportForm,
} from "./support";

const validValues: SupportFormValues = {
  app: "remeet",
  category: "bug",
  name: " Test User ",
  email: " User@Example.COM ",
  replyRequested: true,
  message: "1234567890",
  website: "",
};

describe("support form validation", () => {
  it("accepts valid input", () => {
    expect(validateSupportForm(validValues)).toEqual({});
  });

  it("rejects a missing email when a reply is requested", () => {
    expect(validateSupportForm({ ...validValues, email: "" })).toMatchObject({
      email: "REQUIRED",
    });
  });

  it("rejects an invalid email when a reply is requested", () => {
    expect(validateSupportForm({ ...validValues, email: "invalid" })).toMatchObject({
      email: "INVALID_EMAIL",
    });
  });

  it("does not require email when no reply is requested", () => {
    expect(validateSupportForm({ ...validValues, email: "", replyRequested: false })).toEqual({});
    expect(
      validateSupportForm({ ...validValues, email: "invalid", replyRequested: false }),
    ).toEqual({});
  });

  it("accepts a message of 10 to 5000 characters and nothing outside that", () => {
    const withMessage = (length: number) =>
      validateSupportForm({ ...validValues, message: "x".repeat(length) });
    expect(withMessage(9)).toMatchObject({ message: "TOO_SHORT" });
    expect(withMessage(10)).toEqual({});
    expect(withMessage(5000)).toEqual({});
    expect(withMessage(5001)).toMatchObject({ message: "TOO_LONG" });
  });

  it("accepts a 100-character name and rejects 101", () => {
    expect(validateSupportForm({ ...validValues, name: "x".repeat(100) })).toEqual({});
    expect(validateSupportForm({ ...validValues, name: "x".repeat(101) })).toMatchObject({
      name: "TOO_LONG",
    });
  });
});

describe("reply-implying categories", () => {
  /** A question is unanswerable without an address, so the toggle is hidden
   * for it and the email is required whatever the toggle says. */
  it("hides the toggle for 'question' and still requires an email", () => {
    expect(showsReplyToggle("question")).toBe(false);
    expect(showsReplyToggle("bug")).toBe(true);
    expect(
      validateSupportForm({
        ...validValues,
        category: "question",
        email: "",
        replyRequested: false,
      }),
    ).toMatchObject({ email: "REQUIRED" });
  });
});

describe("support request construction", () => {
  it("builds the API contract and omits empty optional values", () => {
    const request = buildSupportRequest(
      { ...validValues, name: "" },
      {
        requestId: "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
        clientId: "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
        locale: "ja",
        now: new Date("2026-07-26T12:00:00.000Z"),
      },
    );

    expect(request).toEqual({
      requestId: "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
      clientId: "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
      source: "main-web",
      app: "remeet",
      category: "bug",
      email: "user@example.com",
      message: "1234567890",
      locale: "ja-JP",
      submittedAt: "2026-07-26T12:00:00.000Z",
      website: "",
    });
    expect(request).not.toHaveProperty("appVersion");
    expect(request).not.toHaveProperty("buildNumber");
    expect(request).not.toHaveProperty("osVersion");
  });

  it("omits email entirely when no reply is requested", () => {
    const request = buildSupportRequest(
      { ...validValues, name: "", replyRequested: false },
      {
        requestId: "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
        clientId: "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
        locale: "ja",
        now: new Date("2026-07-26T12:00:00.000Z"),
      },
    );
    expect(request).not.toHaveProperty("email");
  });

  it("uses the visible English locale", () => {
    expect(
      buildSupportRequest(validValues, {
        requestId: "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
        clientId: "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
        locale: "en",
        now: new Date("2026-07-26T12:00:00.000Z"),
      }).locale,
    ).toBe("en");
  });
});

describe("support query parameters", () => {
  it("accepts known app and category values, including brand registry apps", () => {
    expect(initialSelections(new URLSearchParams("app=remeet&category=feature"))).toEqual({
      app: "remeet",
      category: "feature",
    });
    expect(initialSelections(new URLSearchParams("app=yohaku"))).toEqual({
      app: "yohaku",
      category: "question",
    });
  });

  it("ignores unknown values", () => {
    expect(initialSelections(new URLSearchParams("app=unknown&category=<script>"))).toEqual({
      app: "remeet",
      category: "question",
    });
  });
});

describe("client ID management", () => {
  it("reuses a valid stored UUID", () => {
    const stored = "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794";
    const storage = {
      getItem: vi.fn(() => stored),
      setItem: vi.fn(),
    };
    expect(getOrCreateClientId(storage, () => "unused")).toBe(stored);
    expect(storage.setItem).not.toHaveBeenCalled();
  });

  it("replaces invalid stored data", () => {
    const generated = "6ba7b810-9dad-41d1-80b4-00c04fd430c8";
    const storage = {
      getItem: vi.fn(() => "invalid"),
      setItem: vi.fn(),
    };
    expect(getOrCreateClientId(storage, () => generated)).toBe(generated);
    expect(storage.setItem).toHaveBeenCalledWith(SUPPORT_CLIENT_ID_KEY, generated);
  });

  it("falls back when storage is unavailable", () => {
    const generated = "6ba7b810-9dad-41d1-80b4-00c04fd430c8";
    const storage = {
      getItem: vi.fn(() => {
        throw new Error("blocked");
      }),
      setItem: vi.fn(),
    };
    expect(getOrCreateClientId(storage, () => generated)).toBe(generated);
  });
});

describe("support request state", () => {
  it("prevents a second submission while sending", () => {
    const cycle = new SupportRequestCycle(() => "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794");
    expect(cycle.begin()).toBe(true);
    expect(cycle.begin()).toBe(false);
  });

  it.each([
    [200, "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794", "success"],
    [200, "different", "server_error"],
    [400, undefined, "validation_error"],
    [429, undefined, "rate_limited"],
    [502, undefined, "delivery_failed"],
    [500, undefined, "server_error"],
  ] as const)("maps HTTP %i to %s", (status, responseId, expected) => {
    expect(statusForApiResponse(status, responseId, "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794")).toBe(
      expected,
    );
  });

  it("keeps the request ID after failure and changes it for a new enquiry", () => {
    const ids = ["49a3999c-0ce1-4ea6-ab68-afcd6dc2e794", "6ba7b810-9dad-41d1-80b4-00c04fd430c8"];
    const cycle = new SupportRequestCycle(() => ids.shift() as string);
    const first = cycle.requestId;
    cycle.begin();
    cycle.complete("network_error");
    expect(cycle.requestId).toBe(first);
    expect(cycle.begin()).toBe(true);
    cycle.complete("success");
    cycle.startNew();
    expect(cycle.requestId).not.toBe(first);
    expect(cycle.status).toBe("idle");
  });
});

describe("Turnstile", () => {
  const values = {
    app: "yohaku",
    category: "question",
    name: "",
    email: "user@example.com",
    replyRequested: true,
    message: "これは十分な長さの問い合わせ内容です。",
    website: "",
  };
  const options = {
    requestId: "49a3999c-0ce1-4ea6-ab68-afcd6dc2e794",
    clientId: "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
    locale: "ja" as const,
  };

  it("sends the token when the form is behind Turnstile", () => {
    const body = buildSupportRequest(values, { ...options, turnstileToken: "a-token" });
    expect(body.turnstileToken).toBe("a-token");
  });

  it("sends no token field at all when it is not", () => {
    expect("turnstileToken" in buildSupportRequest(values, options)).toBe(false);
    expect(
      "turnstileToken" in buildSupportRequest(values, { ...options, turnstileToken: "" }),
    ).toBe(false);
  });

  it("tells the reader to reload when the check fails", () => {
    expect(statusForApiResponse(403, undefined, options.requestId, "TURNSTILE_FAILED")).toBe(
      "verification_failed",
    );
  });

  it("does not blame Turnstile for a 403 that is not one", () => {
    expect(statusForApiResponse(403, undefined, options.requestId, "ORIGIN_NOT_ALLOWED")).toBe(
      "server_error",
    );
    expect(statusForApiResponse(403, undefined, options.requestId)).toBe("server_error");
  });
});
