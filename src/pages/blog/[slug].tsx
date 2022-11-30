import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { ArticleJsonLd } from 'next-seo';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type IBlogUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `blog-${index}` },
    })),
    fallback: false,
  };
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
      <ArticleJsonLd
        url={`https://example.com/blog/${props.slug}`}
        title={props.slug}
        images={[]}
        datePublished={''}
        authorName={undefined}
        description={''}
      />
      <article>
        <header>
          <h1 className="capitalize">{props.slug}</h1>
          <h2>sub title</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
          earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
          iste expedita cupiditate a quidem culpa eligendi, aperiam saepe
          dolores ipsum!
        </p>
      </article>
    </Main>
  );
};

export default Blog;
