import { render, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';

import { Meta } from './Meta';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return <>{props.children}</>;
    }
);

describe('Meta component', () => {
  describe('Render method', () => {
    it('should a page title', async () => {
      const title = 'Random title';

      render(<Meta title={title} description="Random description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
