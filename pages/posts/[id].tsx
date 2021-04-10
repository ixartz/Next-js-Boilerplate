import React from 'react';

import Head from 'next/head';

import Date from '../../components/Date';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getPostData, getAllPostIds } from '../../utils/posts';

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
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
      <p>Hi hi this is a blog post</p>
      <p>{postData.title}</p>
      <p>
        <Date dateString={postData.date} />
      </p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Main>
  );
}
