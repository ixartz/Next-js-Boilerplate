import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="dark:bg-gray-900 antialiased w-full text-gray-700 dark:text-gray-300">
    {props.meta}
    <div className="w-full max-w-6xl mx-auto flex flex-col min-h-screen p-4">
      <Navigation />
      <div className="py-12 content">
        <h1 className="text-xl mb-8">
          Designer and (wannabe) developer of digital products, based in London, UK. Leading design
          for&nbsp;
          <a href="https://swimsmooth.com" title="Swim Smooth">
            Swim Smooth
          </a>
          &apos;s web and iOS apps.
        </h1>
        {props.children}
      </div>
      <div className="flex-grow" />
      <Footer />
    </div>
  </div>
);

export { Main };
