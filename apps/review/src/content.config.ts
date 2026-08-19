import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reviews = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/reviews",
  }),
  schema: z.object({
    app: z.string().min(1),
    appName: z.string().min(1),
    version: z.string().min(1),
    build: z.string().min(1),
    published: z.boolean().default(false),
    youtubeId: z.string().min(1),
    device: z.string().min(1),
    os: z.string().min(1),
    recordedAt: z.string().min(1).optional(),
    features: z.array(z.string().min(1)).min(1),
    notes: z.string().min(1).optional(),
  }),
});

export const collections = { reviews };
