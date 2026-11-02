import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional().default('Equipo Pedagógico y Neurocientífico MindFix'),
    readingTime: z.string().optional().default('8 min de lectura'),
    readTime: z.string().optional(),
    heroImage: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    primaryKeyword: z.string().optional().default('estres y ansiedad por examenes'),
    secondaryKeywords: z.array(z.string()).optional().default([]),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional().default(['MindFix', 'SaludMentalUniversitaria']),
    category: z.string().optional(),
    slug: z.string().optional(),
    targetPersona: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { blog };
