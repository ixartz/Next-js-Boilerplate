import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Blog({ slug }: { slug: string }) {
  return (
    <Main meta={<Meta title={slug} description="Lorem ipsum" />}>
      <h1 className="capitalize">{slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params?.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `blog-${index}` },
    })),
    fallback: false,
  };
};
