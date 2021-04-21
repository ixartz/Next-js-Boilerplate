import React from 'react';

import Head from 'next/head';

import { PageIntro } from '../components/PageIntro';
import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getPageData, getAllPageIds } from '../utils/generatePages';

export async function getStaticPaths() {
  const paths = await getAllPageIds('_pages');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPageData(params.id, '_pages');
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
      <WidthContainer>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <PageIntro>{postData.title}</PageIntro>
        <article className="prose dark:prose-dark">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </WidthContainer>
    </Main>
  );
}
