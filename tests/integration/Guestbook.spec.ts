import { expect, test } from '@playwright/test';

test.describe('Guestbook', () => {
  test.describe('Basic CRUD operations', () => {
    test('should create a new entry in the guestbook and delete it', async ({
      request,
    }) => {
      const create = await request.post('/api/guestbook', {
        data: {
          username: 'RANDOM_USERNAME',
          body: 'RANDOM_BODY',
        },
      });
      const createJson = await create.json();

      expect(create.status()).toBe(200);
      expect(createJson.id).toBeDefined();

      const del = await request.delete('/api/guestbook', {
        data: {
          id: createJson.id,
        },
      });
      expect(del.status()).toBe(200);
    });
  });
});
