import '../styles/globals.css';
import '../styles/custom.css';
import '../styles/movieAccordion.css';
import '../styles/articleList.css';
import '../styles/actorList.css';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
