import { type Context, Hono } from "hono";

import { registerRemeetInviteRoutes, type ApiBindings } from "./routes/remeet/invites";
import { cleanUpExpiredInvites } from "./services/remeet/invite-service";
import { D1InviteStore } from "./services/remeet/invite-store";
import { registerSupportRoute, type SupportDependencies } from "./routes/support";

type ApiContext = Context<{ Bindings: ApiBindings }>;

export function createApp(dependencies: SupportDependencies = {}) {
  const app = new Hono<{ Bindings: ApiBindings }>();

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
  // One Worker, one namespace per app: `/remeet/v1/*` is Remeet's, and the
  // service behind it depends on nothing else served here.
  registerRemeetInviteRoutes(app);
  return app;
}

export const app = createApp();

/**
 * Hono answers requests; the default export also answers the clock.
 *
 * The only scheduled work here is Remeet's: invitations that expired days ago
 * are deleted, so the table cannot be grown without bound by anybody who can
 * reach the create endpoint. Deliberately not done during a request — putting
 * a delete in front of somebody sending an invitation is both slower and, on a
 * bad day, a way to make their invitation fail for a reason that has nothing
 * to do with them.
 */
export default {
  fetch: app.fetch,
  async scheduled(_event: unknown, env: ApiBindings): Promise<void> {
    if (!env.REMEET_INVITES_DB) return;
    await cleanUpExpiredInvites(new D1InviteStore(env.REMEET_INVITES_DB));
  },
};
