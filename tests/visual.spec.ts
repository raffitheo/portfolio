import { test, expect } from '@playwright/test';

const DESKTOP = { width: 1280, height: 720 };
const MOBILE = { width: 390, height: 844 };

test.describe('Full page visual regression', () => {
  for (const { lang, url } of [
    { lang: 'en', url: '/' },
    { lang: 'it', url: '/it' },
    { lang: 'fr', url: '/fr' },
  ]) {
    test(`[${lang}] full page`, async ({ page }) => {
      await page.setViewportSize(DESKTOP);
      await page.goto(url);
      await page.waitForLoadState('networkidle');
      await page.locator('.recharts-wrapper').waitFor({ state: 'visible' });
      // Scroll through the page to trigger IntersectionObserver animations
      // (skill bar progress bars), then wait for them to complete (1.5s transition)
      await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
      await page.waitForTimeout(2000);
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(`full-page-${lang}.png`, { fullPage: true });
    });
  }
});

test.describe('Section visual regression', () => {
  test('Hero - desktop', async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#home')).toHaveScreenshot('hero-desktop.png');
  });

  test('Hero - mobile', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#home')).toHaveScreenshot('hero-mobile.png');
  });

  test('Navbar at top - desktop', async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#desktop-nav')).toHaveScreenshot('navbar-top-desktop.png');
  });

  test('Navbar at top - mobile', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#mobile-nav')).toHaveScreenshot('navbar-top-mobile.png');
  });

  test('Navbar scrolled 100px - desktop', async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(600);
    await expect(page.locator('#desktop-nav')).toHaveScreenshot('navbar-scrolled-desktop.png');
  });

  test('Skills radar chart - desktop', async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.locator('.recharts-wrapper').waitFor({ state: 'visible' });
    await expect(page.locator('#skills .recharts-wrapper')).toHaveScreenshot(
      'skills-radar-desktop.png',
    );
  });

  test('Mobile menu open state', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.click('#mobile-menu-toggle');
    await page.waitForTimeout(400);
    await expect(page.locator('#mobile-nav')).toHaveScreenshot('mobile-menu-open.png');
  });
});
