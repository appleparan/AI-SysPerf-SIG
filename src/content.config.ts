import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sessions = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/sessions' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    week: z.number(),
    chapters: z.string(),
    presenters: z.array(z.string()).default([]),
  }),
});

export const collections = { sessions };
