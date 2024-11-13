import assert from 'node:assert';
import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Increment operation', () => {
    test('should display error message when incrementing with negative number', async ({
      page,
    }) => {
      await page.goto('/counter');

      const count = page.getByText('Count:');
      const countText = await count.textContent();

      assert(countText !== null, 'Count should not be null');

      await page.getByLabel('Increment by').fill('-1');
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Number must be greater than or equal to 1')).toBeVisible();
      await expect(page.getByText('Count:')).toHaveText(countText);
    });

    test('should increment the counter and validate the count', async ({
      page,
    }) => {
      // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
      // The default value is 0 when there is no `x-e2e-random-id` header
      const e2eRandomId = faker.number.int({ max: 1000000 });
      await page.setExtraHTTPHeaders({
        'x-e2e-random-id': e2eRandomId.toString(),
      });
      await page.goto('/counter');

      const count = page.getByText('Count:');
      const countText = await count.textContent();

      assert(countText !== null, 'Count should not be null');

      const countNumber = Number(countText.split(' ')[1]);

      await page.getByLabel('Increment by').fill('2');
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Count:')).toHaveText(`Count: ${countNumber + 2}`);

      await page.getByLabel('Increment by').fill('3');
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Count:')).toHaveText(`Count: ${countNumber + 5}`);
    });
  });
});
