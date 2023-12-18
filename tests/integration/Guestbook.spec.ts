import { expect, test } from '@playwright/test';

// Don't use the default user agent to avoid the requests to be blocked by Clerk middleware.
test.use({ userAgent: '' });

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
