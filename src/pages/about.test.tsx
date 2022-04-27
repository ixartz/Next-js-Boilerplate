import { render, screen } from '@testing-library/react';

import About from './about';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
jest.mock('next/router', () => ({
  useRouter() {
    return {
      basePath: '.',
    };
  },
}));

describe('About page', () => {
  it('should render the About page', () => {
    render(<About />);

    const paragraph = screen.getAllByText(/Lorem ipsum/i);

    expect(paragraph.length).toEqual(2);
  });
});
