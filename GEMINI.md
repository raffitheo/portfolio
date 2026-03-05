# Gemini CLI Project Context - Portfolio

This document provides essential context and instructions for Gemini CLI when working on this developer portfolio project.

## Project Overview
A high-performance, multilingual developer portfolio built with the latest web technologies. It showcases professional experience, projects, skills, and education.

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **UI Library**: [React 19](https://react.dev/) (for interactive components like charts)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Management**: Astro Content Collections (JSON-based)
- **I18n**: Support for English (default), Italian, and French.
- **Deployment**: [Vercel](https://vercel.com/)

## Architecture & Structure
- `src/components/`: Reusable Astro and React components.
- `src/content/`: Data collections for projects, experience, skills, etc., organized by locale.
- `src/i18n/`: Internationalization logic, translation strings, and utilities.
- `src/layouts/`: Base HTML templates (e.g., `Layout.astro`).
- `src/pages/`: Routing logic. `index.astro` redirects/renders default lang, `[lang]/index.astro` handles localized routes.
- `src/styles/`: Global CSS and Tailwind configurations.
- `public/`: Static assets like icons and PDF resumes.

## Building and Running
The project uses `pnpm` as the package manager.

| Task | Command | Description |
|------|---------|-------------|
| **Install** | `pnpm install` | Install all dependencies. |
| **Develop** | `pnpm dev` | Start the development server at `localhost:4321`. |
| **Build** | `pnpm build` | Run type checks and build the static site to `dist/`. |
| **Preview** | `pnpm preview` | Preview the production build locally. |
| **Format** | `pnpm format` | Format code using Prettier. |
| **Lint** | `pnpm lint` | Run ESLint to check for code quality issues. |
| **Lint Fix** | `pnpm lint:fix` | Automatically fix linting issues. |

## Development Conventions
- **Surgical Changes**: When modifying components or content, ensure you match the existing indentation and style.
- **I18n Consistency**: When adding new text, update `src/i18n/ui.ts` for all supported languages (`en`, `it`, `fr`).
- **Content Collections**: New data entries should be added to the appropriate JSON files in `src/content/` following the schema defined in `src/content/config.ts`.
- **Typing**: Maintain strict TypeScript typing. Use the schemas in `src/content/config.ts` for data-related types.
- **Components**:
    - Use `.astro` for static layout and structural components.
    - Use `.tsx` for components requiring client-side interactivity (e.g., charts using Recharts).
    - Use Lucide icons via `lucide-astro`.
- **Styling**: Prefer Tailwind utility classes. Global styles should be kept to a minimum in `src/styles/global.css`.

## Key Files for Reference
- `astro.config.mjs`: Core framework configuration and integrations.
- `package.json`: Project dependencies and scripts.
- `src/content/config.ts`: Schema definitions for all content collections.
- `src/i18n/ui.ts`: Translation dictionary for the UI.
