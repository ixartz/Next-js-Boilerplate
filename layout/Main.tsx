import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  maxWidth: string;
};

const Main = (props: IMainProps) => (
  <div
    className={`max-w-screen-md ${props.maxWidth} mx-auto dark:bg-gray-900 antialiased w-full text-gray-700 dark:text-gray-300`}
  >
    {props.meta}
    <div className="max-w-screen mx-auto flex flex-col min-h-screen p-4">
      <Navigation />
      <div className="py-12 content">
        <h1 className="text-xl">
          Designer and (wannabe) developer of digital products, based in London, UK. Leading design
          for
          {' '}
          <a href="https://swimsmooth.com" title="Swim Smooth">
            Swim Smooth
          </a>
          's web and iOS apps.
        </h1>
        {props.children}
      </div>
      <div className="flex-grow" />
      <Footer />
    </div>
  </div>
);

export { Main };
