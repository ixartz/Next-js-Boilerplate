import React from 'react';

import Head from 'next/head';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getPageData, getAllPageIds } from '../../utils/generatePages';

export async function getStaticPaths() {
  const paths = await getAllPageIds('_work');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPageData(params.id, '_work');
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <p>{postData.title}</p>
      <article className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Main>
  );
}
