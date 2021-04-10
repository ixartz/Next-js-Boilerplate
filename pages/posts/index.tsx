import React from 'react';

import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getSortedPageData } from '../../utils/generatePages';

export async function getStaticProps() {
  const allPostsData = getSortedPageData('_blog');
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="flex justify-between w-full">
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <span>{date}</span>
          </li>
        ))}
      </ul>
    </Main>
  );
}
