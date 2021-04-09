import React from 'react';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

import { getSortedPostsData } from '../../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog() {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <ul>
        <li>Hey</li>
      </ul>
    </Main>
  );
}
