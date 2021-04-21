import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { minorProjects } from '../_data/homepageData';
import { ContactSpiel } from '../components/ContactSpiel';
import { PageIntro } from '../components/PageIntro';
import { ProjectItem, ProjectList } from '../components/ProjectList';
import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getSortedPageData } from '../utils/generatePages';

export default function Index({ allPostsData }) {
  // Split projects in to featured/not
  const featured = ['swim-smooth', 'sow', 'trustify'];
  const featuredProjects = allPostsData.filter((project) => featured.includes(project.id));
  const otherProjects = allPostsData.filter((project) => !featuredProjects.includes(project));

  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
      pageHeadline={<></>}
    >
      <PageIntro>
        {' '}
        Designer and (wannabe) developer of digital products, based in London, UK. Leading design
        for&nbsp;
        <a href="https://swimsmooth.com" title="Swim Smooth">
          Swim Smooth
        </a>
        &apos;s web and iOS apps.
      </PageIntro>
      <WidthContainer size="lg" className="flex space-x-4">
        {featuredProjects.map((project) => (
          <ProjectThumb key={project.id} project={project} />
        ))}
      </WidthContainer>
      <WidthContainer>
        <ProjectList title="Other projects">
          {otherProjects.map(({
            id, title, name, date,
          }) => (
            <ProjectItem
              key={id}
              href={`/work/${id}`}
              title={name}
              description={title}
              date={date}
            />
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
      </WidthContainer>
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

function ProjectThumb({ project }) {
  return (
    <Link href={`work/${project.id}`}>
      <a>
        <div className="">
          <div className="h-128 bg-gray-800 mb-2">
            <Image src={project.thumbnail} width={480} height={640} />
          </div>
          <p>
            {project.name}
            &#58;&nbsp;
            <span className="text-gray-500">{project.headline}</span>
          </p>
        </div>
      </a>
    </Link>
  );
}
