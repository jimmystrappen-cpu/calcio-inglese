import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      'Transfer News',
      'Match Report',
      'Club News',
      'Analysis',
      'Injury News',
      'Pre-Season',
      'Features',
    ]),
    teamA: z.string().optional(),
    teamB: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Calcio Inglese Staff'),
    // Internal fact-checking reference only — never rendered on the site.
    sourceNote: z.string().optional(),
    // Raw HTML embed snippet for a real editorial photo (e.g. a Getty Images
    // Embed widget). Optional — when absent, the article falls back to the
    // generated ArticleThumb SVG placeholder.
    heroEmbed: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
