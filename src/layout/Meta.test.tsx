import { render, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';

import { Meta } from './Meta';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
jest.mock('next/router', () => ({
  useRouter() {
    return {
      basePath: '.',
    };
  },
}));

// Mock `next/head`:
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      return <>{props.children}</>;
    }
);

describe('Meta component', () => {
  it('should render with page title', async () => {
    const title = 'Random title';

    render(<Meta title={title} description="Random description" />);

    await waitFor(() => {
      expect(document.title).toEqual(title);
    });
  });
});
