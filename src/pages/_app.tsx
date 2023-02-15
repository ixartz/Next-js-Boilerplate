import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'light',
      fontFamily: 'Inria Sans',
      fontSizes: {
        xs: 14,
        sm: 16,
        md: 20,
        lg: 32,
        xl: 40,
      },
    }}
  >
    <Component {...pageProps} />
  </MantineProvider>
);

export default MyApp;
