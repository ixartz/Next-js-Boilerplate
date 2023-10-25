import { expect, test } from '@playwright/test';
import assert from 'assert';

const targetUrl = process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com';

test('Visit Checkly HQ page', async ({ page }) => {
  const response = await page.goto(targetUrl);

  assert(response !== null, 'response is not null');
  expect(response.status()).toBeLessThan(400);
});
