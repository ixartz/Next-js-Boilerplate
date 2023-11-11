import { expect, test } from '@playwright/test';

// FIXME: Replace Google.com with your own production URL
const targetUrl = process.env.ENVIRONMENT_URL || 'https://google.com';

test('should display the homepage', async ({ page }) => {
  await page.goto(targetUrl);

  await expect(
    page.getByRole('heading', {
      name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
    }),
  ).toBeVisible();
});

test('should navigate to the about page', async ({ page }) => {
  await page.goto(targetUrl);

  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/about$/);

  await expect(
    page.getByText('Lorem ipsum dolor sit amet', { exact: false }),
  ).toHaveCount(2);
});

test('should navigate to the portfolio page', async ({ page }) => {
  await page.goto(targetUrl);

  await page.getByRole('link', { name: 'Portfolio' }).click();
  await expect(page).toHaveURL(/portfolio$/);

  await expect(page.locator('main').getByRole('link')).toHaveCount(6);
});

test('should navigate to the blog page', async ({ page }) => {
  await page.goto(targetUrl);

  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL(/blog$/);

  await expect(page.locator('main').getByRole('link')).toHaveCount(10);
});
