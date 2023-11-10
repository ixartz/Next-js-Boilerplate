import { expect, test } from '@playwright/test';

// FIXME: Replace Google.com with your own URL
const targetUrl = process.env.ENVIRONMENT_URL || 'https://google.com';

test('should navigate to the about page', async ({ page }) => {
  await page.goto(targetUrl);

  await expect(
    page.getByRole('heading', {
      name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
    }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL(/about$/);

  await expect(
    page.getByText('Lorem ipsum dolor sit amet', { exact: false }),
  ).toHaveCount(2);
});
