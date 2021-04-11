import React from 'react';

import Head from 'next/head';

import Date from '../../components/Date';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getPageData, getAllPageIds } from '../../utils/generatePages';

export async function getStaticPaths() {
  const paths = await getAllPageIds('_blog');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPageData(params.id, '_blog');
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

      <div className="mb-8">
        <h1 className="text-xl">{postData.title}</h1>
        <em>
          <Date dateString={postData.date} yearOnly={false} />
        </em>
      </div>
      <article
        className="prose dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Main>
  );
}
