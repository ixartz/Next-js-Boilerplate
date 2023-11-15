import { expect, test } from '@playwright/test';

// Checkly is a tool used to monitor deployed environments, such as production or preview environments.
// It runs end-to-end tests located in the `__checks__` folder after each deployment to ensure that the environment is up and running.
// With Checkly, you can monitor your production environment and run `__checks__` tests regularly (you can choose the frequency).
// If the tests fail, Checkly will notify you via email, Slack, or other channels of your choice.
// On the other hand, E2E tests located in the `tests` folder are used to test the application before deployment.
// You can run `tests` locally or on CI to ensure that the application is ready to be deployed.

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
