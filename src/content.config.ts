import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const educationCollection = defineCollection({
	loader: glob({
		pattern: '**/[a-z][a-z].json',
		base: 'src/content/education',
	}),
	schema: z.array(
		z.object({
			id: z.string(),
			institution: z.string(),
			degree: z.string(),
			location: z.string(),
			period: z.string(),
			description: z.string().optional(),
			order: z.number(),
		}),
	),
});

const experienceCollection = defineCollection({
	loader: glob({
		pattern: '**/[a-z][a-z].json',
		base: 'src/content/experience',
	}),
	schema: z.array(
		z.object({
			id: z.string(),
			role: z.string(),
			company: z.string(),
			period: z.string(),
			location: z.string(),
			type: z.string(),
			description: z.array(z.string()),
			skills: z.array(z.string()),
			order: z.number(),
		}),
	),
});

const navbarCollection = defineCollection({
	loader: glob({ pattern: '**/[a-z][a-z].json', base: 'src/content/navbar' }),
	schema: z.array(
		z.object({
			id: z.string(),
			label: z.string(),
			order: z.number().optional(),
		}),
	),
});

const personalData = defineCollection({
	loader: glob({ pattern: '**/[a-z][a-z].json', base: 'src/content/personal' }),
	schema: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			location: z.string(),
			email: z.string(),
		}),
	),
});

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/[a-z][a-z].json', base: 'src/content/projects' }),
	schema: z.array(
		z.object({
			id: z.string(),
			title: z.string(),
			description: z.string(),
			image: z.string(),
			tags: z.array(z.string()),
			github: z.url().optional(),
			demo: z.url().optional(),
			order: z.number().optional(),
		}),
	),
});

const skillCategoriesCollection = defineCollection({
	loader: glob({
		pattern: '**/[a-z][a-z].json',
		base: 'src/content/skills/categories',
	}),
	schema: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			skills: z.array(
				z.object({
					name: z.string(),
					level: z.number().min(0).max(100),
				}),
			),
			order: z.number(),
		}),
	),
});

const skillRadarCollection = defineCollection({
	loader: glob({
		pattern: '**/[a-z][a-z].json',
		base: 'src/content/skills/radar',
	}),
	schema: z.array(
		z.object({
			id: z.string(),
			subject: z.string(),
			value: z.number().min(0).max(100),
			order: z.number(),
		}),
	),
});

const socialCollection = defineCollection({
	loader: glob({ pattern: '**/[a-z][a-z].json', base: 'src/content/social' }),
	schema: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			url: z.url(),
			icon: z.string(),
			label: z.string(),
			order: z.number().optional(),
		}),
	),
});

export const collections = {
	education: educationCollection,
	experience: experienceCollection,
	navbar: navbarCollection,
	personal: personalData,
	projects: projectsCollection,
	skillCategories: skillCategoriesCollection,
	skillRadar: skillRadarCollection,
	social: socialCollection,
};
