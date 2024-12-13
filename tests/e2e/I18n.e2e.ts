import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should switch language from English to French using dropdown and verify text on the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Smartvest Bot - AI-Powered Trading' }),
      ).toBeVisible();

      await page.getByLabel('lang-switcher').selectOption('fr');

      await expect(
        page.getByRole('heading', { name: 'Smartvest Bot - Trading par IA' }),
      ).toBeVisible();
    });

    test('should switch language from English to French using URL and verify text on the sign-in page', async ({ page }) => {
      await page.goto('/sign-in');

      await expect(page.getByText('Sign in to Smartvest Bot')).toBeVisible();

      await page.goto('/fr/sign-in');

      await expect(page.getByText('Connexion à Smartvest Bot')).toBeVisible();
    });

    test('should maintain language preference in dashboard', async ({ page }) => {
      // Note: You'll need to implement authentication logic before this test
      await page.goto('/fr/dashboard');

      await expect(
        page.getByText('Tableau de bord de trading'),
      ).toBeVisible();

      await expect(
        page.getByText('Valeur totale du portefeuille'),
      ).toBeVisible();
    });
  });
});
