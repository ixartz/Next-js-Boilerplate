import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import messages from '@/locales/en.json';
import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', async () => {
      await render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate
            leftNav={
              <>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
              </>
            }
          >
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>
      );

      const menuItemList = page.getByRole('listitem');

      expect(menuItemList.elements()).toHaveLength(3);
    });

    it('should display copyright text with current year and app name', async () => {
      await render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate leftNav={<li>1</li>}>{null}</BaseTemplate>
        </NextIntlClientProvider>
      );

      const year = new Date().getFullYear();
      const copyrightText = page.getByText(new RegExp(`© ${year}`));

      expect(copyrightText).toBeDefined();
    });
  });
});
