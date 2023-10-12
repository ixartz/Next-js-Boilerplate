import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the about page', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
        }),
      ).toBeVisible();

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page).toHaveURL('/about');

      await expect(
        page.getByText('Lorem ipsum dolor sit amet', { exact: false }),
      ).toHaveCount(2);
    });

    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
        }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the about page', async ({ page }) => {
      await page.goto('/about');

      await expect(
        page.getByRole('link', {
          name: 'About',
        }),
      ).toBeVisible();

      await percySnapshot(page, 'About');
    });
  });
});
