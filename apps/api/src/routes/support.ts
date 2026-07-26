import type { Context, Hono } from "hono";

import { sendSupportEmail } from "../support/email";
import { createSupportEmail } from "../support/template";
import type { EmailDeliveryResult, SupportBindings, SupportEmail } from "../support/types";
import { validateSupportRequest } from "../support/validation";

const MAX_BODY_BYTES = 20 * 1024;
const LOCAL_ORIGIN = "http://localhost:4321";

type SupportApp = Hono<{ Bindings: SupportBindings }>;
type SupportContext = Context<{ Bindings: SupportBindings }>;

export interface SupportDependencies {
  deliver?: (email: SupportEmail, env: SupportBindings) => Promise<EmailDeliveryResult>;
  rateLimit?: (clientId: string, env: SupportBindings) => Promise<boolean>;
}

const errorMessages = {
  INVALID_JSON: "リクエストを読み取れませんでした。",
  RATE_LIMITED: "短時間に送信できる回数を超えました。しばらくしてからお試しください。",
  DELIVERY_FAILED: "お問い合わせを送信できませんでした。時間をおいて再度お試しください。",
} as const;

function allowedOrigins(env: SupportBindings): Set<string> {
  return new Set([env.MAIN_SITE_ORIGIN, LOCAL_ORIGIN]);
}

function corsHeaders(c: SupportContext): Record<string, string> {
  const origin = c.req.header("Origin");
  return origin && allowedOrigins(c.env).has(origin)
    ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" }
    : { Vary: "Origin" };
}

function logResult(
  request: { requestId: string; source: string; app: string; category: string } | undefined,
  status: number,
  startedAt: number,
  emailId?: string,
): void {
  console.log(
    JSON.stringify({
      requestId: request?.requestId,
      source: request?.source,
      app: request?.app,
      category: request?.category,
      status,
      emailId,
      durationMs: Date.now() - startedAt,
    }),
  );
}

export function registerSupportRoute(
  app: SupportApp,
  dependencies: SupportDependencies = {},
): void {
  app.options("/api/support", (c) => {
    const origin = c.req.header("Origin");
    if (!origin || !allowedOrigins(c.env).has(origin)) {
      return c.json(
        { ok: false, code: "ORIGIN_NOT_ALLOWED", message: "Origin is not allowed." },
        403,
      );
    }
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(c),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  });

  app.post("/api/support", async (c) => {
    const startedAt = Date.now();
    const origin = c.req.header("Origin");
    if (origin && !allowedOrigins(c.env).has(origin)) {
      logResult(undefined, 403, startedAt);
      return c.json(
        { ok: false, code: "ORIGIN_NOT_ALLOWED", message: "Origin is not allowed." },
        403,
        corsHeaders(c),
      );
    }

    const declaredLength = Number(c.req.header("Content-Length") ?? "0");
    if (declaredLength > MAX_BODY_BYTES) {
      logResult(undefined, 400, startedAt);
      return c.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "入力内容を確認してください。",
          fields: { request: "TOO_LARGE" },
        },
        400,
        corsHeaders(c),
      );
    }

    let rawBody: string;
    let input: unknown;
    try {
      rawBody = await c.req.text();
      if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES)
        throw new RangeError("body too large");
      input = JSON.parse(rawBody);
    } catch (error) {
      const tooLarge = error instanceof RangeError;
      logResult(undefined, 400, startedAt);
      return c.json(
        tooLarge
          ? {
              ok: false,
              code: "VALIDATION_ERROR",
              message: "入力内容を確認してください。",
              fields: { request: "TOO_LARGE" },
            }
          : { ok: false, code: "INVALID_JSON", message: errorMessages.INVALID_JSON },
        400,
        corsHeaders(c),
      );
    }

    const validation = validateSupportRequest(input);
    if (!validation.ok) {
      logResult(undefined, 400, startedAt);
      return c.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "入力内容を確認してください。",
          fields: validation.fields,
        },
        400,
        corsHeaders(c),
      );
    }
    const request = validation.value;

    if (request.website) {
      logResult(request, 200, startedAt);
      return c.json({ ok: true, requestId: request.requestId }, 200, corsHeaders(c));
    }

    const withinLimit = dependencies.rateLimit
      ? await dependencies.rateLimit(request.clientId, c.env)
      : (await c.env.SUPPORT_RATE_LIMITER.limit({ key: request.clientId })).success;
    if (!withinLimit) {
      logResult(request, 429, startedAt);
      return c.json(
        { ok: false, code: "RATE_LIMITED", message: errorMessages.RATE_LIMITED },
        429,
        corsHeaders(c),
      );
    }

    try {
      const email = createSupportEmail(request, {
        from: c.env.SUPPORT_FROM_EMAIL,
        to: c.env.SUPPORT_TO_EMAIL,
      });
      const result = dependencies.deliver
        ? await dependencies.deliver(email, c.env)
        : c.env.SUPPORT_MOCK_DELIVERY === "true"
          ? { id: "mock-email-id" }
          : await sendSupportEmail(email, c.env.RESEND_API_KEY);
      logResult(request, 200, startedAt, result.id);
      return c.json({ ok: true, requestId: request.requestId }, 200, corsHeaders(c));
    } catch {
      logResult(request, 502, startedAt);
      return c.json(
        { ok: false, code: "DELIVERY_FAILED", message: errorMessages.DELIVERY_FAILED },
        502,
        corsHeaders(c),
      );
    }
  });
}
