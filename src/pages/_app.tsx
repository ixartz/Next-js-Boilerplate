/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
