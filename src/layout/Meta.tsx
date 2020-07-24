import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  locale: string;
  site_name: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1"
        key="viewport"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
      <link rel="icon" href="/favicon.ico" key="favicon" />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: props.locale,
        site_name: props.site_name,
      }}
    />
  </>
);

export { Meta };
