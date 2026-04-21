import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const idFromEntry = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions', generateId: idFromEntry }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    vendor: z.string(),
    year: z.number(),
    openSource: z.boolean(),
    deploymentModes: z.array(
      z.enum(['saas', 'on-premise', 'hybrid']),
    ),
    category: z.enum(['pure-player', 'esb-origin', 'cloud-native']),
    website: z.string().url(),
    lang: z.enum(['fr', 'en']),
    ratings: z.object({
      timeToMarket: z.number().min(1).max(5),
      communaute: z.number().min(1).max(5),
      cout: z.number().min(1).max(5),
      flexibilite: z.number().min(1).max(5),
      securite: z.number().min(1).max(5),
      onPremise: z.number().min(1).max(5),
      saas: z.number().min(1).max(5),
      documentation: z.number().min(1).max(5),
    }),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications', generateId: idFromEntry }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['refcard', 'article']),
    description: z.string(),
    downloadUrl: z.string().url(),
    image: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().optional().default(false),
    lang: z.enum(['fr', 'en']),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links', generateId: idFromEntry }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    source: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    lang: z.enum(['fr', 'en']),
  }),
});

export const collections = { solutions, publications, links };
