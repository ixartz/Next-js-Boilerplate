import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export async function getStaticProps() {
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Index() {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <h1 className="text-xl">Photos</h1>
    </Main>
  );
}
