import { test, expect } from '@playwright/test';

const DESKTOP = { width: 1280, height: 720 };
const MOBILE = { width: 390, height: 844 };

// Derived from src/content/navbar/en.json — 'projects' is a page section but not a nav item
const NAV_SECTIONS = ['experience', 'skills', 'education', 'contact'];

test.describe('Desktop navigation', () => {
  test.use({ viewport: DESKTOP });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  for (const section of NAV_SECTIONS) {
    test(`nav click scrolls to #${section}`, async ({ page }) => {
      await page.click(`#desktop-nav button[data-scroll-to="${section}"]`);
      await page.waitForTimeout(700);
      await expect(page.locator(`#${section}`)).toBeInViewport();
    });
  }

  test('Explore button scrolls to #experience', async ({ page }) => {
    await page.click('#explore-btn');
    await page.waitForTimeout(700);
    await expect(page.locator('#experience')).toBeInViewport();
  });

  test('scroll-to-top button appears after 500px and scrolls back to top', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(400);
    await expect(page.locator('#scroll-to-top')).toBeVisible();
    await page.click('#scroll-to-top');
    await page.waitForTimeout(700);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(50);
  });

  for (const { href, lang: targetLang } of [
    { href: '/it/', lang: 'it' },
    { href: '/fr/', lang: 'fr' },
  ]) {
    test(`language switcher: click ${targetLang} navigates to ${href}`, async ({ page }) => {
      // Hover the container (mouseenter fires on #desktop-lang-container)
      await page.hover('#desktop-lang-container');
      await expect(page.locator('#desktop-lang-dropdown')).toBeVisible();
      await page.click(`#desktop-lang-dropdown a[href="${href}"]`);
      await expect(page).toHaveURL(new RegExp(`\\/${targetLang}\\/?$`));
      await expect(page.locator('html')).toHaveAttribute('lang', targetLang);
    });
  }

  test('CV download href is correct for en', async ({ page }) => {
    const href = await page.locator('a[download]').getAttribute('href');
    expect(href).toBe('/files/Raffaele-Valenti-CV-EN.pdf');
  });

  test('CV download href is correct for /it', async ({ page }) => {
    await page.goto('/it/');
    const href = await page.locator('a[download]').getAttribute('href');
    expect(href).toBe('/files/Raffaele-Valenti-CV-IT.pdf');
  });

  test('CV download href is correct for /fr', async ({ page }) => {
    await page.goto('/fr/');
    const href = await page.locator('a[download]').getAttribute('href');
    expect(href).toBe('/files/Raffaele-Valenti-CV-FR.pdf');
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: MOBILE });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hamburger opens mobile menu', async ({ page }) => {
    await page.click('#mobile-menu-toggle');
    await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#mobile-menu')).toBeVisible();
  });

  test('clicking hamburger again closes mobile menu', async ({ page }) => {
    await page.click('#mobile-menu-toggle');
    await page.click('#mobile-menu-toggle');
    await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#mobile-menu')).not.toBeVisible();
  });

  test('Escape closes mobile menu and returns focus to toggle', async ({ page }) => {
    await page.click('#mobile-menu-toggle');
    // Wait for menu to be open and focus to move inside it
    await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'true');
    // Focus the first item in the menu explicitly so the keydown event fires on a child of #mobile-menu
    await page.locator('#mobile-menu button[data-scroll-to]').first().focus();
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#mobile-menu-toggle')).toBeFocused();
  });

  for (const section of NAV_SECTIONS) {
    test(`mobile nav click scrolls to #${section} and closes menu`, async ({ page }) => {
      await page.click('#mobile-menu-toggle');
      await page.click(`#mobile-menu button[data-scroll-to="${section}"]`);
      await page.waitForTimeout(700);
      await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'false');
      await expect(page.locator(`#${section}`)).toBeInViewport();
    });
  }

  test('mobile language switcher navigates to /fr', async ({ page }) => {
    await page.click('#mobile-lang-button');
    await expect(page.locator('#mobile-lang-dropdown')).toBeVisible();
    await page.click('#mobile-lang-dropdown a[href="/fr/"]');
    await expect(page).toHaveURL(/\/fr\/?$/);
  });
});

test.describe('Skip link', () => {
  test('skip link is first focusable element and scrolls #main-content into view', async ({
    page,
  }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('a.skip-link')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main-content')).toBeInViewport();
  });
});
