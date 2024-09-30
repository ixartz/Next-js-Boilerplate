import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the about page', async ({ page }) => {
      await page.goto('/about');

      await expect(
        page.getByRole('link', { name: 'About' }),
      ).toBeVisible();

      await percySnapshot(page, 'About');
    });

    test('should take screenshot of the portfolio page and one details page', async ({ page }) => {
      await page.goto('/portfolio');

      await expect(
        page.getByText('Welcome to my portfolio page!'),
      ).toBeVisible();

      await percySnapshot(page, 'Portfolio');

      await page.getByRole('link', { name: 'Portfolio 2' }).click();

      await expect(
        page.getByText('Created a set of promotional'),
      ).toBeVisible();

      await percySnapshot(page, 'Portfolio details');
    });

    test('should take screenshot of the French homepage', async ({ page }) => {
      await page.goto('/fr');

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage - French');
    });
  });
});
