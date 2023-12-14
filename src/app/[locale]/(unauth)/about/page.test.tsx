import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import About from './page';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('About page', () => {
  describe('Render method', () => {
    it('should have a text starting with `Welcome to our About page`', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <About />
        </NextIntlClientProvider>,
      );

      const paragraph = screen.getByText(/Welcome to our About page/);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
