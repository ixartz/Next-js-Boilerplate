import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { HelloWorld } from './HelloWorld';

describe('HelloWorld component', () => {
  describe('Render method', () => {
    it('should display Hello World heading', () => {
      render(<HelloWorld />);

      const heading = page.getByRole('heading', { name: /Hello World!/i });

      expect(heading).toBeInTheDocument();
    });

    it('should display welcome message', () => {
      render(<HelloWorld />);

      const welcomeText = page.getByText(/Welcome to the Next.js Boilerplate/i);

      expect(welcomeText).toBeInTheDocument();
    });
  });
});
