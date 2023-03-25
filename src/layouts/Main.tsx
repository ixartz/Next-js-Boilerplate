import { ReactNode } from 'react';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Wrapper from 'src/components/Wrapper';

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = (props: IMainProps) => (
  <Wrapper className='antialiased'>
    {props.meta}
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  </Wrapper>
);

export { Main };
