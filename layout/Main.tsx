import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { WidthContainer } from '../components/WidthContainer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  pageHeadline: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="dark:bg-gray-900 antialiased w-full text-gray-700 dark:text-gray-300 flex flex-col min-h-screen py-4 ">
    {props.meta}
    <WidthContainer>
      <Navigation />
      {props.pageHeadline ? (
        <div className="py-12 content">
          <h1 className="text-xl mb-8">{props.pageHeadline}</h1>
        </div>
      ) : (
        <div className="h-16" />
      )}
    </WidthContainer>
    {props.children}
    <div className="flex-grow" />
    <WidthContainer>
      <Footer />
    </WidthContainer>
  </div>
);

export { Main };
