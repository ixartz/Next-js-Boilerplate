import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { WidthContainer } from '../components/WidthContainer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex flex-col bg-surface antialiased w-full text-primary min-h-screen p-4">
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
