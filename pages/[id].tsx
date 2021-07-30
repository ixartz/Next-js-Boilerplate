import hydrate from 'next-mdx-remote/hydrate';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getAllPageIds, getPageData } from '../utils/generatePages';

export async function getStaticPaths() {
  const paths = await getAllPageIds('_pages');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const { mdxSource, data } = await getPageData(params.id, '_pages');

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

{
  /* const cloudinary = ({ src, width, quality }) => {
  //return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  return `https://res.cloudinary.com/samstephenson/image/upload/${src}`;
}; */
}
// Add any components to make accessible to mdx
const components = {
  WidthContainer,
  Image,
};

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <PageIntro>{frontMatter.title}</PageIntro>
      <WidthContainer leftAligned>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>

        <article className="prose prose-lg dark:prose-dark">{content}</article>
      </WidthContainer>
    </Main>
  );
}
