import assert from 'node:assert';

import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Increment operation', () => {
    test('should increment the counter', async ({
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
