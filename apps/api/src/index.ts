import { Hono } from "hono";

import { registerSupportRoute, type SupportDependencies } from "./routes/support";
import type { SupportBindings } from "./support/types";

export function createApp(dependencies: SupportDependencies = {}) {
  const app = new Hono<{ Bindings: SupportBindings }>();

  app.get("/api/health", (c) => {
    return c.json({
      ok: true,
      service: "tomokichi-api",
    });
  });

  registerSupportRoute(app, dependencies);
  return app;
}

export const app = createApp();

export default app;
