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
  });
});
