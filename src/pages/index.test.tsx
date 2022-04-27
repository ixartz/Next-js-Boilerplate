import { render, screen } from '@testing-library/react';

import Index from './index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
jest.mock('next/router', () => ({
  useRouter() {
    return {
      basePath: '.',
    };
  },
}));

describe('Index page', () => {
  it('should render the Index page', () => {
    render(<Index />);

    const heading = screen.getByRole('heading', {
      name: /Boilerplate code/,
    });

    expect(heading).toBeInTheDocument();
  });
});
