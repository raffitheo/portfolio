import type { CollectionEntry } from 'astro:content';

export type Education = CollectionEntry<'education'>['data'];
export type Experience = CollectionEntry<'experience'>['data'];
export type NavbarItem = CollectionEntry<'navbar'>['data'];
export type PersonalData = CollectionEntry<'personal'>['data'];
export type Project = CollectionEntry<'projects'>['data'];
export type SkillCategory = CollectionEntry<'skillCategories'>['data'];
export type SkillRadar = CollectionEntry<'skillRadar'>['data'];
export type SocialLink = CollectionEntry<'social'>['data'];
