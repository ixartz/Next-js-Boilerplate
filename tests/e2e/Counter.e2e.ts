import assert from 'node:assert';

import { expect, test } from '@playwright/test';

// This test suite will run in serial mode
test.describe.configure({ mode: 'serial' });

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
