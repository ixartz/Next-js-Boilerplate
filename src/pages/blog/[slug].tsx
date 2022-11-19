import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type IBlogUrl = {
  slug: string;
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <h1 className="capitalize">{props.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `blog-${index}` },
    })),
    fallback: false,
  };
};

export default Blog;
