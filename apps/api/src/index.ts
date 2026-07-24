import { Hono } from "hono";

export const app = new Hono();

app.get("/api/health", (c) => {
  return c.json({
    ok: true,
    service: "tomokichi-api",
  });
});

export default app;
