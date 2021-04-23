import React from "react";

import Head from "next/head";

import Date from "../../components/Date";
import hydrate from "next-mdx-remote/hydrate";
import { WidthContainer } from "../../components/WidthContainer";
import { Main } from "../../layout/Main";
import { Meta } from "../../layout/Meta";
import { getPageData, getAllPageIds } from "../../utils/generatePages";

export async function getStaticPaths() {
  const paths = await getAllPageIds("_blog");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const { mdxSource, data } = await getPageData(params.id, "_blog");

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

// Add any components to make accessible to mdx
const components = {};

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
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <WidthContainer>
        <div className="mb-8">
          <h1 className="text-xl">{frontMatter.title}</h1>
          <em>
            <Date dateString={frontMatter.date} yearOnly={false} />
          </em>
        </div>
        <article className="prose prose-lg dark:prose-dark">{content}</article>
      </WidthContainer>
    </Main>
  );
}
