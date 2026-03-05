import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
	site: 'https://raffaelevalenti.it',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'it', 'fr'],
		routing: {
			prefixDefaultLocale: false,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
