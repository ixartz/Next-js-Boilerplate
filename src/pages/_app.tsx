import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import 'src/styles/global.css';

/* Adding custom font */
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/*  eslint-disable-next-line react/no-unknown-property */}
    <style jsx global>{`
      *,
      html {
        font-family: ${roboto.style.fontFamily};
      }
    `}</style>
    <Component
      {...pageProps}
      className={`${roboto.className || ''} ${pageProps.className || ''}`}
    />
  </>
);

export default MyApp;
