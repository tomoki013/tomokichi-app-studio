import { type Context, Hono } from "hono";

import { registerSupportRoute, type SupportDependencies } from "./routes/support";
import type { SupportBindings } from "./support/types";

type ApiContext = Context<{ Bindings: SupportBindings }>;

export function createApp(dependencies: SupportDependencies = {}) {
  const app = new Hono<{ Bindings: SupportBindings }>();

  const health = (c: ApiContext) => {
    return c.json({
      ok: true,
      service: "tomokichi-api",
      version: "v1",
    });
  };

  app.get("/api/v1/health", health);
  app.get("/api/health", health);

  registerSupportRoute(app, dependencies);
  return app;
}

export const app = createApp();

export default app;
