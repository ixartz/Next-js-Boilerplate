// @ts-nocheck
import fs from 'fs';
import path from 'path';

import {
  CategoryList,
  Layout,
  Post,
  Pagination,
  Meta,
} from '@components/common';
import { getPosts } from '@lib/posts';

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout meta={<Meta title="Test" description="Lorem ipsum" />}>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Post key={index} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>

        <div className="w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./src/posts'));

  const numPages = Math.ceil(files.length / 6);

  const paths = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join('./src/posts'));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);

  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / 6);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * 6, (pageIndex + 1) * 6);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
