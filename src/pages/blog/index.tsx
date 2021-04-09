import React from 'react';

import { Meta } from '../../layout/Meta';

import { Main } from '../../templates/Main';

import { getSortedPostsData } from '../../utils/posts.ts';

export default function BlogIndex({ allPostsData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <ul>
        {allPostsData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
