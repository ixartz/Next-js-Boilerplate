import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('Static pages', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
      }),
    ).toBeVisible();
  });
});
