import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Basic database operations', () => {
    test('shouldn\'t increment the counter with an invalid input', async ({
      request,
    }) => {
      const counter = await request.put('/api/counter', {
        data: {
          increment: 'incorrect',
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a negative number', async ({
      request,
    }) => {
      const counter = await request.put('/api/counter', {
        data: {
          increment: -1,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a number greater than 3', async ({
      request,
    }) => {
      const counter = await request.put('/api/counter', {
        data: {
          increment: 5,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('should increment the counter and update the counter correctly', async ({
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
