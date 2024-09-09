import { expect, test } from '@playwright/test';

// Checkly is a tool used to monitor deployed environments, such as production or preview environments.
// It runs end-to-end tests with the `.check.e2e.ts` extension after each deployment to ensure that the environment is up and running.
// With Checkly, you can monitor your production environment and run `*.check.e2e.ts` tests regularly at a frequency of your choice.
// If the tests fail, Checkly will notify you via email, Slack, or other channels of your choice.
// On the other hand, E2E tests ending with `*.e2e.ts` are only run before deployment.
// You can run them locally or on CI to ensure that the application is ready for deployment.

// BaseURL needs to be explicitly defined in the test file.
// Otherwise, Checkly runtime will throw an exception: `CHECKLY_INVALID_URL: Only URL's that start with http(s)`
// You can't use `goto` function directly with a relative path like with other *.e2e.ts tests.
// Check the example at https://feedback.checklyhq.com/changelog/new-changelog-436

test.describe('Sanity', () => {
  test.describe('Static pages', () => {
    test('should display the homepage', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();
    });

    test('should navigate to the about page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page).toHaveURL(/about$/);

      await expect(
        page.getByText('Welcome to our About page', { exact: false }),
      ).toBeVisible();
    });

    test('should navigate to the portfolio page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Portfolio' }).click();

      await expect(page).toHaveURL(/portfolio$/);

      await expect(
        page.locator('main').getByRole('link', { name: /^Portfolio/ }),
      ).toHaveCount(6);
    });
  });
});
