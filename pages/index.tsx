import React from 'react';

import { minorProjects } from '../_data/homepageData';
import { ContactSpiel } from '../components/ContactSpiel';
import { ProjectList, ProjectItem } from '../components/ProjectList';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getSortedPageData } from '../utils/generatePages';

export default function Index({ allPostsData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
      maxWidth="max-w-6xl"
    >
      <ProjectThumbs title="Swim Smooth" description="Web, iOS, Watch" />
      <ProjectThumbs title="Swim Smooth" description="Web, iOS, Watch" />
      <ProjectThumbs title="Swim Smooth" description="Web, iOS, Watch" />
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
      <ContactSpiel />
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

function ProjectThumbs({ title, description }) {
  return (
    <div className="flex flex-col space-y-4 py-8 border-t border-gray-800">
      <div className="flex space-x-4 justify-stretch">
        <ProjectThumbnail />
        <ProjectThumbnail />
        <ProjectThumbnail />
      </div>
      <p>
        {title}
        <br />
        {description}
      </p>
    </div>
  );
}

function ProjectThumbnail() {
  return <div className="bg-gray-600 w-full h-32" />;
}
