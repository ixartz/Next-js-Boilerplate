import { render, screen, within } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  it('should render with 3 menu item', () => {
    render(<Main meta={null}>{null}</Main>);

    const menuItemList = screen.getAllByRole('listitem');

    expect(menuItemList).toHaveLength(3);
  });

  it('should render a link to support creativedesignsguru.com', () => {
    render(<Main meta={null}>{null}</Main>);

    const copyrightSection = screen.getByText(/© Copyright/);
    const copyrightLink = within(copyrightSection).getByRole('link');

    /*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */
    expect(copyrightLink).toHaveAttribute(
      'href',
      'https://creativedesignsguru.com'
    );
  });
});
