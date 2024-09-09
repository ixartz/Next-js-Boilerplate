import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page.getByText('Welcome to our About page')).toBeVisible();

      await page.getByRole('combobox', { name: 'lang-switcher' }).selectOption({ label: 'FR' });

      await expect(page.getByText('Bienvenue sur notre page À propos')).toBeVisible();

      await page.getByRole('link', { name: 'Accueil' }).click();

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();
    });
  });
});
