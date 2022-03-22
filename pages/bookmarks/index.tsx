import React from "react";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import { PageIntro } from "../../components/PageIntro";
import { WidthContainer } from "../../components/WidthContainer";
import { Main } from "../../layout/Main";
import { Meta } from "../../layout/Meta";
import { getSortedPageData } from "../../utils/generatePages";

export async function getStaticProps() {
  const allPostsData = getSortedPageData("_blog");
  return {
    props: {
      allPostsData,
      airtableApiKey: process.env.AIRTABLE_API_KEY,
    },
  };
}

export default function BookmarksPage({ airtableApiKey }) {
  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <PageIntro>Reading List</PageIntro>
      <WidthContainer leftAligned>
        <p>
          Below is an experimental list of all my bookmarks over the past
          year(ish), scraped from{" "}
          <a href="https://mymind.com" title="MyMind">
            MyMind
          </a>
          . Explore links related by one or two degrees of separation.{" "}
          <a
            href="https://github.com/samstephenson/Personal-Site/tree/master/components/Bookmarks"
            title="Bookmarks - Github"
          >
            See the code here on Github
          </a>
          .
        </p>
        <br />
      </WidthContainer>
      <WidthContainer leftAligned size="full">
        <Bookmarks apiKey={airtableApiKey} />
      </WidthContainer>
    </Main>
  );
}
