import React from 'react';
import Bookmarks from '../../components/Bookmarks/Bookmarks';
import { PageIntro } from '../../components/PageIntro';
import { WidthContainer } from '../../components/WidthContainer';
import { Main } from '../../layout/Main';
import { Meta } from '../../layout/Meta';
import { getSortedPageData } from '../../utils/generatePages';

export async function getStaticProps() {
  const allPostsData = getSortedPageData('_blog');
  return {
    props: {
      allPostsData,
      airtableApiKey: process.env.AIRTABLE_API_KEY,
    },
  };
}

export default function BookmarksPage({ allPostsData, airtableApiKey }) {
  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <PageIntro>Bookmarks</PageIntro>
      <WidthContainer leftAligned>
        <p>
          This is an experimental list of all my bookmarks over the past
          year(ish), scraped from{' '}
          <a href="https://mymind.com" title="MyMind">
            MyMind
          </a>
          . Explore bookmarks related by one or two degrees of separation by
          selecting one on the left. See the code here on Github.
        </p>
        <br />
      </WidthContainer>
      <WidthContainer leftAligned size="full">
        <Bookmarks apiKey={airtableApiKey} />
      </WidthContainer>
    </Main>
  );
}
