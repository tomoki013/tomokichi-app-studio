import { seedApps } from "./seed/apps.ts";
import { seedReplyTemplates, seedSignature } from "./seed/reply-templates.ts";

/**
 * Tomokichi's starting data for inquiry-platform, in the shape of the
 * platform's `DeploymentSeed` (`apps/api/seed/types.ts` of the pinned release).
 *
 * `studio` is the service for questions about the Studio in general rather
 * than any one app, and where contacts naming no app are filed. Production has
 * had both since migration 0006; they are here so a fresh database ends up the
 * same.
 *
 *   node deploy/inquiry-platform/run.mjs seed --dry-run
 */
export default {
  apps: seedApps,
  replyTemplates: seedReplyTemplates,
  signature: seedSignature,
  services: [{ id: "studio", name: "tmkch.io", slug: "tmkch-io" }],
  defaultServiceId: "studio",
};
