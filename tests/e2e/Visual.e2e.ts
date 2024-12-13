import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Smartvest Bot - AI-Powered Trading' }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the about page', async ({ page }) => {
      await page.goto('/about');

      await expect(
        page.getByText('Welcome to Smartvest Bot!', { exact: false }),
      ).toBeVisible();

      await percySnapshot(page, 'About');
    });

    test('should take screenshot of the sign-in page', async ({ page }) => {
      await page.goto('/sign-in');

      await expect(
        page.getByRole('heading', { name: 'Sign in to Smartvest Bot' }),
      ).toBeVisible();

      await percySnapshot(page, 'Sign In');
    });

    test('should take screenshot of the French homepage', async ({ page }) => {
      await page.goto('/fr');

      await expect(
        page.getByRole('heading', { name: 'Smartvest Bot - Trading par IA' }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage - French');
    });

    test('should take screenshot of the dashboard (authenticated)', async ({ page }) => {
      // Note: You'll need to implement authentication logic before this test
      await page.goto('/dashboard');

      await expect(
        page.getByRole('heading', { name: 'Trading Dashboard' }),
      ).toBeVisible();

      await percySnapshot(page, 'Dashboard');
    });
  });
});
