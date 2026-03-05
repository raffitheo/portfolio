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
[![Node Version](https://img.shields.io/static/v1?label=Node&message=^24.13.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/static/v1?label=pnpm&message=^10.28.2&color=f69220&style=for-the-badge)](https://pnpm.io)

---

## 🚀 Overview

This portfolio is a modern, static-site-generated application designed for speed, accessibility, and a premium user experience. It features a unified "Glassmorphic" design language across all sections, ensuring a professional and cohesive visual identity.

### Key Features

- 🌍 **Full I18n Support**: Multilingual support for English, Italian, and French, with automatic routing and SEO optimization.
- ⚡ **Astro 5 Performance**: Blazing fast static site generation (SSG) with minimal client-side JavaScript.
- 🎨 **Tailwind CSS 4**: Cutting-edge styling using the latest Tailwind features and `@tailwindcss/vite` integration.
- 📊 **Interactive Data**: Custom React components like the Skill Radar Chart for technical proficiency visualization.
- 📱 **Responsive Design**: Fully optimized for all device sizes, from mobile to ultra-wide displays.
- 📄 **Content-Driven**: Managed through Astro Content Collections (JSON-based) for easy updates and maintenance.

---

## ✨ Recent Updates

- **Unified Visual Language**: Standardized all cards (Experience, Projects, Skills, Contact) with a consistent hover system, padding, and glassmorphic effects.
- **Smart "See More" Toggles**: 
  - **Descriptions**: Long project descriptions are now smartly clamped with an expandable toggle.
  - **Tags**: Project tech stacks show the primary tools by default with a counter (+N) to reveal the full list.
- **Redesigned Interactions**: 
  - Buttons across the site (Projects, Hero, Contact) now follow a shared set of primary and outline styles.
  - Social links in the Contact section have been upgraded from simple icons to full-width, styled buttons.
- **Improved Content Logic**: Added conditional rendering to project cards to ensure a clean UI when links are not available.

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Astro 5](https://astro.build/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Icons** | [Lucide](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 🏃 Getting Started

### Prerequisites
- Node.js ^24.13.0
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

---

## 📁 Project Structure

- `src/components/`: Reusable Astro and React components.
- `src/content/`: Data collections for projects, experience, and localized content.
- `src/i18n/`: Internationalization logic and translation dictionaries.
- `src/layouts/`: Base HTML templates.
- `src/styles/`: Global CSS and Tailwind configuration.

---

<p align="center">
  Built with ❤️ by Raffaele Valenti
</p>
