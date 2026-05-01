import { test, expect } from '@playwright/test';

const locales = [
  { lang: 'en', url: '/', cvSuffix: 'EN' },
  { lang: 'it', url: '/it', cvSuffix: 'IT' },
  { lang: 'fr', url: '/fr', cvSuffix: 'FR' },
];

for (const { lang, url, cvSuffix } of locales) {
  test.describe(`[${lang}] content integrity`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(url);
    });

    test('html lang attribute matches locale', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', lang);
    });

    test('Hero: name, role text, Explore button, CV download visible', async ({ page }) => {
      await expect(page.locator('#home h1')).toBeVisible();
      await expect(page.locator('#home h1')).not.toBeEmpty();
      await expect(page.locator('#explore-btn')).toBeVisible();
      const cvLink = page.locator(`a[href="/files/Raffaele-Valenti-CV-${cvSuffix}.pdf"]`);
      await expect(cvLink).toBeVisible();
    });

    test('Navbar: all nav item labels non-empty', async ({ page }) => {
      const navItems = page.locator(
        '#desktop-nav button[data-scroll-to]:not([data-type="cta-button"])',
      );
      const count = await navItems.count();
      expect(count).toBeGreaterThan(0);
      for (let i = 0; i < count; i++) {
        await expect(navItems.nth(i)).not.toBeEmpty();
      }
    });

    test('Experience: at least one card with role and company', async ({ page }) => {
      const roles = page.locator('#experience h3');
      await expect(roles.first()).toBeVisible();
      await expect(roles.first()).not.toBeEmpty();
      await expect(page.locator('#experience h4').first()).not.toBeEmpty();
    });

    test('Projects: at least one card with title and description', async ({ page }) => {
      const titles = page.locator('[data-project-card] h3');
      await expect(titles.first()).toBeVisible();
      await expect(titles.first()).not.toBeEmpty();
      await expect(
        page.locator('[data-project-card] [data-description]').first(),
      ).not.toBeEmpty();
    });

    test('Skills: section title visible, skill category heading present', async ({ page }) => {
      await expect(page.locator('#skills-title')).toBeVisible();
      await expect(page.locator('#skills-title')).not.toBeEmpty();
      const categoryHeadings = page.locator('#skills h3').first();
      await expect(categoryHeadings).toBeVisible();
      await expect(categoryHeadings).not.toBeEmpty();
    });

    test('Skills: radar chart renders', async ({ page }) => {
      await expect(page.locator('.recharts-wrapper')).toBeVisible();
    });

    test('Education: at least one entry with degree and institution', async ({ page }) => {
      const degrees = page.locator('#education h3');
      await expect(degrees.first()).toBeVisible();
      await expect(degrees.first()).not.toBeEmpty();
      await expect(page.locator('#education h4').first()).not.toBeEmpty();
    });

    test('Contact: email link and social links present', async ({ page }) => {
      await expect(page.locator('#contact a[href^="mailto:"]')).toBeVisible();
      await expect(page.locator('#contact a[aria-label="GitHub"]')).toBeVisible();
      await expect(page.locator('#contact a[aria-label="LinkedIn"]')).toBeVisible();
    });

    test('Footer: nav links non-empty', async ({ page }) => {
      const footerButtons = page.locator('footer button[data-scroll-to]');
      const count = await footerButtons.count();
      expect(count).toBeGreaterThan(0);
      for (let i = 0; i < count; i++) {
        await expect(footerButtons.nth(i)).not.toBeEmpty();
      }
    });
  });
}
