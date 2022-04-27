import { render, screen } from '@testing-library/react';

import About from './about';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('About page', () => {
  it('should render the About page', () => {
    render(<About />);

    const paragraph = screen.getAllByText(/Lorem ipsum/);

    expect(paragraph).toHaveLength(2);
  });
});
