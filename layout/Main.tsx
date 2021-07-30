import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { WidthContainer } from '../components/WidthContainer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps, leftAligned = false) => (
  <div className="flex flex-col bg-surface antialiased w-full text-primary min-h-screen p-4 py-8 md:p-8 md:py-16">
    {props.meta}
    <WidthContainer leftAligned={leftAligned}>
      <Navigation />
    </WidthContainer>
    <div className="mt-12">{props.children}</div>
    <div className="flex-grow" />
    <Footer />
  </div>
);

export { Main };
