import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Basic database operations', () => {
    test('should increment the counter', async ({
      request,
    }) => {
      let counter = await request.put('/api/counter', {
        data: {
          increment: 1,
        },
      });
      let counterJson = await counter.json();

      expect(counter.status()).toBe(200);

      // Save the current count
      const count = counterJson.count;

      counter = await request.put('/api/counter', {
        data: {
          increment: 2,
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 2);

      counter = await request.put('/api/counter', {
        data: {
          increment: 1,
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 3);
    });
  });
});
