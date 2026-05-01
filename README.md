<p align="center">
  <h1 align="center">Raffaele Valenti - Developer Portfolio 🤙</h1>

  <p align="center">
    A high-performance, multilingual developer portfolio built with the latest web technologies to showcase professional experience, projects, and technical expertise.
    <br/>
    <strong>Live Demo » </strong> 
    <a href="https://raffaelevalenti.it/">https://raffaelevalenti.it/</a>
  </p>
</p>

![CI/CD](https://vercelbadge.vercel.app/api/raffitheo/portfolio?style=for-the-badge)
[![GitHub license](https://img.shields.io/github/license/raffitheo/portfolio?style=for-the-badge)](https://github.com/raffitheo/portfolio/blob/master/LICENSE)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=>=22.12.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/static/v1?label=pnpm&message=^10.28.2&color=f69220&style=for-the-badge)](https://pnpm.io)

---

## 🚀 Overview

This portfolio is a modern, static-site-generated application designed for speed, accessibility, and a premium user experience. It features a unified "Glassmorphic" design language across all sections, ensuring a professional and cohesive visual identity.

### Key Features

- 🌍 **Full I18n Support**: Multilingual support for English, Italian, and French, with automatic routing and SEO optimization.
- ⚡ **Astro 6 Performance**: Blazing fast static site generation (SSG) with minimal client-side JavaScript.
- 🎨 **Tailwind CSS 4**: Cutting-edge styling using the latest Tailwind features and `@tailwindcss/vite` integration.
- 📊 **Interactive Data**: Custom React components like the Skill Radar Chart for technical proficiency visualization.
- 📱 **Responsive Design**: Fully optimized for all device sizes, from mobile to ultra-wide displays.
- 📄 **Content-Driven**: Managed through Astro Content Collections (JSON-based) for easy updates and maintenance.

---

## ✨ Recent Updates

- **Playwright Testing Suite**: End-to-end tests for content, navigation, and visual regression, with per-platform snapshots.
- **Dependency Upgrade**: Bumped to Astro 6, TypeScript 6, React 19, and Tailwind CSS 4.
- **Accessibility Improvements**: Semantic labeling and focus management across interactive components.
- **Image Optimization**: Migrated project assets to `astro:assets` for automatic format conversion and lazy loading.
- **Noscript Fallback**: Skills section now degrades gracefully when JavaScript is disabled.

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Astro 6](https://astro.build/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org/) |
| **Testing** | [Playwright](https://playwright.dev/) |
| **Icons** | [Lucide](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 🏃 Getting Started

### Prerequisites
- Node.js >=22.12.0
- pnpm ^10.28.2

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```
Starts the development server at `localhost:4321`.

### Build
```bash
pnpm build
```
Builds the static site to the `dist/` directory.

### Testing
```bash
pnpm test                      # run all Playwright tests
pnpm test:ui                   # open Playwright interactive UI
pnpm test:update-snapshots     # regenerate visual regression snapshots
```

---

## 📁 Project Structure

- `src/components/`: Reusable Astro and React components.
- `src/content/`: Data collections for projects, experience, and localized content.
- `src/i18n/`: Internationalization logic and translation dictionaries.
- `src/layouts/`: Base HTML templates.
- `src/styles/`: Global CSS and Tailwind configuration.
- `tests/`: Playwright test suites (`content`, `navigation`, `visual`) and snapshots.

---

<p align="center">
  Built with ❤️ by Raffaele Valenti
</p>
