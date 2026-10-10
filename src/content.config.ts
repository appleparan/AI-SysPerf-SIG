import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    week: z.number(),
    presenters: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { notes };
