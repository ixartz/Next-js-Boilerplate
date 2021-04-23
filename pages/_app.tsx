import React from "react";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import "../styles/main.css";

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
