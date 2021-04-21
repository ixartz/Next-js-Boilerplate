import React from 'react';

import Link from 'next/link';

import Date from '../../components/Date';
import { WidthContainer } from '../../components/WidthContainer';
import { Main } from '../../layout/Main';
import { Meta } from '../../layout/Meta';
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
      <WidthContainer>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex justify-between w-full">
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <span className="text-secondary">
                <Date dateString={date} yearOnly />
              </span>
            </li>
          ))}
        </ul>
      </WidthContainer>
    </Main>
  );
}
