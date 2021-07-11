import { ReactNode } from 'react';

import { Navbar, Footer } from '@components/common';

type ILayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => {
  return (
    <div className="antialiased font-poppins w-full">
      {props.meta}
      <Navbar />
      <main className="fit container mx-auto py-16 px-8">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
