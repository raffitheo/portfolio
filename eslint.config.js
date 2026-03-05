import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default [
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	...eslintPluginAstro.configs['flat/recommended'],
	...eslintPluginAstro.configs['flat/jsx-a11y-strict'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
		},
	},
	{
		files: ['**/*.{js,ts,tsx,astro}'],
		plugins: {
			import: eslintPluginImport,
		},
		rules: {
			'no-undef': 'off',
			'import/order': 'off', // Disable import/order rule due to eslint-plugin-import v2 not supporting ESLint v10
		},
	},
	{
		ignores: ['dist/**', 'node_modules/**', '.astro/**'],
	},
	eslintConfigPrettier,
];
