import React from 'react';

import { contactInfo, minorProjects } from '../_data/homepageData';
import { ProjectList, ProjectItem } from '../components/ProjectList';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getSortedPageData } from '../utils/generatePages';

export default function Index({ allPostsData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <h1 className="text-xl">
        Designer and (wannabe) developer of digital products, based in London, UK. Leading design
        for
        {' '}
        <a href="https://swimsmooth.com" title="Swim Smooth">
          Swim Smooth
        </a>
        's web and iOS apps.
      </h1>
      <ProjectList title="Work">
        {allPostsData.map(({
          id, title, name, date,
        }) => (
          <ProjectItem key={id} href={`/work/${id}`} title={name} description={title} date={date} />
        ))}
      </ProjectList>
      <ProjectList title="Experiments">
        {minorProjects.map((item) => (
          <ProjectItem
            title={item.title}
            description={item.description}
            href={item.url}
            date={item.date}
          />
        ))}
      </ProjectList>
      <h4 className="mt-8 uppercase text-sm mb-2 tracking-wide">Contact</h4>
      <p>
        Email
        {' '}
        <a href="mailto:sam.stephenson@hey.com" title="Email me">
          sam.stephenson@hey.com
        </a>
        , or find me on
        {' '}
        {contactInfo.map((item, i) => (
          <>
            {contactInfo.length === i + 1 && 'or '}
            <a href={item.url} title={item.title}>
              {item.title}
            </a>
            {contactInfo.length !== i + 1 && ', '}
          </>
        ))}
        . I'm open to freelance and like out-the-blue emails from strangers.
      </p>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPageData('_work');
  return {
    props: {
      allPostsData,
    },
  };
}
