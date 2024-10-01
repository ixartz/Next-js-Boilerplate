import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Basic database operations', () => {
    test('shouldn\'t increment the counter with an invalid input', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: 'incorrect',
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a negative number', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: -1,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a number greater than 3', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: 5,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('should increment the counter and update the counter correctly', async ({ page }) => {
      // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
      // The default value is 0 when there is no `x-e2e-random-id` header
      const e2eRandomId = faker.number.int({ max: 1000000 });

      let counter = await page.request.put('/api/counter', {
        data: {
          increment: 1,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      let counterJson = await counter.json();

      expect(counter.status()).toBe(200);

      // Save the current count
      const count = counterJson.count;

      counter = await page.request.put('/api/counter', {
        data: {
          increment: 2,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 2);

      counter = await page.request.put('/api/counter', {
        data: {
          increment: 1,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 3);
    });
  });
});
