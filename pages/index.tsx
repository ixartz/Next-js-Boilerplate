import React from 'react';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getSortedPageData } from '../utils/generatePages';

export async function getStaticProps() {
  const allPostsData = getSortedPageData('_work');
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Index({ allPostsData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <h1>Research-driven design for digital products</h1>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id} className="flex justify-between w-full">
          <Link href={`/work/${id}`}>
            <a>{title}</a>
          </Link>
          <span>{date}</span>
        </li>
      ))}
    </Main>
  );
}
