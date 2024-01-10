import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Guestbook', () => {
  test.describe('CRUD operation', () => {
    test('should browse to guestbook, crate a new entry, read, update and remove the newly created', async ({
      page,
    }) => {
      await page.goto('/guestbook');
      await expect(page.getByText('Username')).toBeVisible();

      const username = faker.internet.userName();
      const body = faker.lorem.words();

      // Create
      await page.getByLabel('Username').fill(username);
      await page.getByLabel('Body').fill(body);
      await page.getByRole('button', { name: 'Save' }).click();

      const guestbookList = page.getByTestId('guestbook-list');

      // Read
      await expect(guestbookList.getByText(username)).toBeVisible();

      const updatedUsername = `${username} updated`;

      // Update
      await guestbookList.locator('button[aria-label=edit]').last().click();
      await guestbookList.getByText('Username').fill(updatedUsername);
      await guestbookList.getByRole('button', { name: 'Save' }).click();

      // Verify after update
      await expect(guestbookList.getByText(updatedUsername)).toBeVisible();

      // Delete
      await guestbookList.locator('button[aria-label=delete]').last().click();
      await expect(guestbookList.getByText(updatedUsername)).toBeHidden();
    });
  });
});
