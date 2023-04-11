import '../styles/global.css';

// // eslint-disable-next-line import/no-extraneous-dependencies
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
