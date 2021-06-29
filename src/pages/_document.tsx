import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { Config } from '../utils/Config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
