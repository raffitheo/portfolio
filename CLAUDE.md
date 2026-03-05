# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

| Task | Command | Notes |
|------|---------|-------|
| **Install dependencies** | `pnpm install` | Runs on first checkout. |
| **Run development server** | `pnpm dev` | Starts Astro dev server at `localhost:4321`. |
| **Build for production** | `pnpm build` | Runs `astro check` first, then builds the site. |
| **Preview local build** | `pnpm preview` | Serves the built output locally. |
| **Format code** | `pnpm format` | Uses Prettier with Astro, TypeScript, and Tailwind plugins. |
| **Lint** | `pnpm lint` | Runs ESLint on all source files. |
| **Lint & auto‑fix** | `pnpm lint:fix` | Runs ESLint with `--fix`. |
| **Run tests** | *No tests currently defined.* | If tests are added, use `pnpm test` (configured by Jest or Vitest). |

> **Tip:** For a single test file, you can run `pnpm test path/to/file.test.tsx` once the test framework is configured.

## High‑Level Architecture

- **Framework**: **Astro 5** with **React 19** integration (`@astrojs/react`).
- **TypeScript** is the primary language; type definitions for React and Node are provided.
- **Content**: Data is managed through Astro’s content collections (`src/content`). Each language (`en`, `fr`, `it`) has its own JSON files that are queried at build time via `getEntry`/`getCollection`.
- **Internationalization**: `src/i18n` contains translation utilities (`utils.ts`, `ui.ts`) and a translation map (`src/i18n/translations.ts`). The current locale is inferred from the URL via `getLangFromUrl`.
- **Styling**: Tailwind CSS is configured in `tailwind.config.js` and used throughout Astro components. Global styles are in `src/styles/global.css` and imported in the layout component.
- **Components**: All UI pieces live in `src/components` and are written as Astro components (`*.astro`) that may embed React components (`*.tsx`).
- **Layout**: `src/layouts/Layout.astro` provides the base HTML, meta tags, and theming. It imports the global CSS and sets the `<html lang>` attribute.
- **Pages**: `src/pages/index.astro` is the landing page; additional pages can be added in `src/pages`.
- **Build Output**: The site is static‑generated to `dist/` by `astro build`.
- **Linting & Formatting**: ESLint (with `@eslint/js`, `eslint-plugin-astro`, etc.) and Prettier (with plugins for Astro, Tailwind, etc.) enforce code quality.

## Key Repository Files

- `package.json`: scripts, dependencies, and devDependencies.
- `astro.config.mjs`: Astro configuration and integrations.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript compiler options.
- `src/content/*`: Data for projects, education, skills, etc.
- `src/i18n/*`: Translation utilities and data.
- `src/components/*`: Reusable UI components.
- `src/layouts/Layout.astro`: Global layout.
- `src/pages/*`: Page routes.

## Useful Commands for Debugging

- **Check Astro types**: `pnpm astro check` (included in build).
- **View build output**: After building, open `dist/index.html` locally.
- **Inspect generated CSS**: Tailwind purge runs during build; inspect `dist/_astro/*.css`.

## Note on Testing

No automated tests are currently committed. If you wish to add tests, configure Jest or Vitest in the `devDependencies` and create a `tests/` directory. Update the `scripts.test` entry accordingly.
