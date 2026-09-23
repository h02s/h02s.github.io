import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("Notes"),
    draft: z.boolean().default(false),
    source: z.string().url().optional()
  })
});

export const collections = { articles };