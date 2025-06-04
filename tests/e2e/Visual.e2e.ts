/* eslint-disable playwright/no-networkidle */ // Ensure all network requests are completed before taking a snapshot
import { expect, takeSnapshot, test } from '@chromatic-com/playwright';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }, testInfo) => {
      await page.goto('/', { waitUntil: 'networkidle' });

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the about page', async ({ page }, testInfo) => {
      await page.goto('/about', { waitUntil: 'networkidle' });

      await expect(
        page.getByRole('link', { name: 'About' }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio page', async ({ page }, testInfo) => {
      await page.goto('/portfolio', { waitUntil: 'networkidle' });

      await expect(
        page.getByText('Welcome to my portfolio page!'),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio details page', async ({ page }, testInfo) => {
      await page.goto('/portfolio');

      await page.getByRole('link', { name: 'Portfolio 2' }).click();

      await expect(
        page.getByText('Created a set of promotional'),
      ).toBeVisible();

      // Ensure all network requests are completed before taking a snapshot
      await page.waitForLoadState('networkidle');

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the French homepage', async ({ page }, testInfo) => {
      await page.goto('/fr', { waitUntil: 'networkidle' });

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });
  });
});
