import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto flex flex-col min-h-screen p-4">
      <Navigation />

      <div className="py-5 content">{props.children}</div>
      <div className="flex-grow" />
      <Footer />
    </div>
  </div>
);

export { Main };
