import React from 'react';

import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { Main } from '../../layout/Main';
import { getSortedPageData } from '../../utils/generatePages';
import Date from '../../components/Date';

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
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <span className="text-gray-600 dark:text-gray-500">
              <Date dateString={date} yearOnly={true} />
            </span>
          </li>
        ))}
      </ul>
    </Main>
  );
}
