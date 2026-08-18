import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/posts", pattern: "*.md" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string().nullable().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()),
    createdAt: z.coerce.date(),
  }),
});

export const collections = { posts };
