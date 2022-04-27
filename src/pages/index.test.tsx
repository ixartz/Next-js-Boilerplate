import { render, screen } from '@testing-library/react';

import Index from './index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  it('should render the Index page', () => {
    render(<Index />);

    const heading = screen.getByRole('heading', {
      name: /Boilerplate code/,
    });

    expect(heading).toBeInTheDocument();
  });
});
