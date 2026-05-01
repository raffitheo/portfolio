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
| **Run tests** | `pnpm test` | Runs Playwright test suite (requires dev server or starts it automatically). |
| **Run tests (UI mode)** | `pnpm test:ui` | Opens Playwright interactive UI. |
| **Update snapshots** | `pnpm test:update-snapshots` | Regenerates all visual regression snapshots. |

## High‑Level Architecture

- **Framework**: **Astro 6** with **React 19** integration (`@astrojs/react`).
- **TypeScript 6** is the primary language; type definitions for React and Node are provided.
- **Content**: Data is managed through Astro's content collections (`src/content`). Each language (`en`, `fr`, `it`) has its own JSON files that are queried at build time via `getEntry`/`getCollection`.
- **Internationalization**: Astro's built-in i18n is configured in `astro.config.mjs` with `defaultLocale: 'en'` and `prefixDefaultLocale: false`. `src/i18n` contains translation utilities (`utils.ts`, `ui.ts`) and a translation map (`src/i18n/translations.ts`). The current locale is inferred from the URL via `getLangFromUrl`.
- **Styling**: Tailwind CSS v4 is used via the `@tailwindcss/vite` Vite plugin (no `tailwind.config.js`). Global styles are in `src/styles/global.css` and imported in the layout component.
- **Components**: All UI pieces live in `src/components` and are written as Astro components (`*.astro`) that may embed React components (`*.tsx`).
- **Layout**: `src/layouts/Layout.astro` provides the base HTML, meta tags, and theming. It imports the global CSS and sets the `<html lang>` attribute.
- **Pages**: `src/pages/index.astro` is the landing page; additional pages can be added in `src/pages`.
- **Build Output**: The site is static‑generated to `dist/` by `astro build`. Target site: `https://raffaelevalenti.it`.
- **Linting & Formatting**: ESLint (with `@eslint/js`, `eslint-plugin-astro`, etc.) and Prettier (with plugins for Astro, Tailwind, etc.) enforce code quality.
- **TypeScript path aliases**: `@assets/*`, `@content/*`, `@components/*`, `@layouts/*`, `@pages/*`, `@styles/*` map to their respective `src/` subdirectories.

## Key Repository Files

- `package.json`: scripts, dependencies, and devDependencies.
- `astro.config.mjs`: Astro configuration, integrations (`@astrojs/react`, `@astrojs/sitemap`), i18n routing, and Tailwind v4 Vite plugin.
- `tsconfig.json`: TypeScript compiler options and path aliases (excludes `tests/`).
- `playwright.config.ts`: Playwright configuration; tests run against `localhost:4321`, snapshots in `tests/snapshots/`.
- `src/content/*`: Data for projects, education, skills, etc.
- `src/i18n/*`: Translation utilities and data.
- `src/components/*`: Reusable UI components.
- `src/layouts/Layout.astro`: Global layout.
- `src/pages/*`: Page routes.
- `tests/`: Playwright test suites — `content.spec.ts`, `navigation.spec.ts`, `visual.spec.ts`.

## Useful Commands for Debugging

- **Check Astro types**: `pnpm astro check` (included in build).
- **View build output**: After building, open `dist/index.html` locally.
- **Inspect generated CSS**: Tailwind purge runs during build; inspect `dist/_astro/*.css`.

## Testing

Playwright is configured with three test suites in `tests/`:

- **`content.spec.ts`**: Verifies page content is rendered correctly.
- **`navigation.spec.ts`**: Tests routing and navigation behavior.
- **`visual.spec.ts`**: Visual regression tests with snapshots stored in `tests/snapshots/`.

The dev server starts automatically when running tests locally (`reuseExistingServer: true`). In CI, `forbidOnly` is enforced and retries are set to 1. Only Chromium is used as the test browser.
