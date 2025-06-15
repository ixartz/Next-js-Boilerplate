import { expect, takeSnapshot, test } from '@chromatic-com/playwright';
import { waitForAllImagesLoaded } from '../VisualTestUtils';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }, testInfo) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await waitForAllImagesLoaded(page);
      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the about page', async ({ page }, testInfo) => {
      await page.goto('/about');

      await expect(
        page.getByRole('link', { name: 'About' }),
      ).toBeVisible();

      await waitForAllImagesLoaded(page);
      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio page', async ({ page }, testInfo) => {
      await page.goto('/portfolio');

      await expect(
        page.getByText('Welcome to my portfolio page!'),
      ).toBeVisible();

      await waitForAllImagesLoaded(page);
      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio details page', async ({ page }, testInfo) => {
      await page.goto('/portfolio');

      await page.getByRole('link', { name: 'Portfolio 2' }).click();

      await expect(
        page.getByText('Created a set of promotional'),
      ).toBeVisible();

      await waitForAllImagesLoaded(page);
      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the French homepage', async ({ page }, testInfo) => {
      await page.goto('/fr');

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();

      await waitForAllImagesLoaded(page);
      await takeSnapshot(page, testInfo);
    });
  });
});
