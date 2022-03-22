import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";
import "../styles/main.css";

// eslint-disable-next-line
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
