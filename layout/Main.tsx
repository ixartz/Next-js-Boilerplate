import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { WidthContainer } from '../components/WidthContainer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex flex-col dark:bg-gray-900 antialiased w-full text-gray-700 dark:text-gray-300 min-h-screen py-4">
    {props.meta}
    <WidthContainer>
      <Navigation />
    </WidthContainer>
    <div className="mt-12">{props.children}</div>
    <div className="flex-grow" />
    <WidthContainer>
      <Footer />
    </WidthContainer>
  </div>
);

export { Main };
