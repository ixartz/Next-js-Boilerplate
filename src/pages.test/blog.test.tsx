import { render, screen } from '@testing-library/react';

import Blog from '@/pages/blog';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Blog page', () => {
  describe('Render method', () => {
    it('should display 10', () => {
      render(<Blog />);

      const link = screen.getAllByRole('link', {
        name: /Blog -/,
      });

      expect(link).toHaveLength(10);
    });
  });
});
