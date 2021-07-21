import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { ProjectItem, ProjectList } from '../components/ProjectList';
import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getSortedPageData } from '../utils/generatePages';
import { minorProjects } from '../_data/homepageData';

function ProjectThumb({ project }) {
  return (
    <Link href={`work/${project.id}`} key={project.id}>
      <a className="hover:no-underline text-primary">
        <div className="relative pt-[150%] bg-surface-100 hover:bg-surface-200 transition mb-2">
          <Image src={project.thumbnail} layout="fill" objectFit="contain" />
        </div>
        <p>
          {project.name}
          &#58;&nbsp;
          <span className="text-secondary">{project.headline}</span>
        </p>
      </a>
    </Link>
  );
}

export default function Index({ allPostsData }) {
  // Split projects in to featured/not
  const featured = ['swim-smooth', 'sow', 'trustify'];
  const projects = {
    featured: allPostsData.filter((project) => featured.includes(project.id)),
    other: allPostsData.filter((project) => !featured.includes(project.id)),
  };

  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <PageIntro>
        {' '}
        Designer of digital products, based in London, UK. Leading design
        at&nbsp;
        <a href="https://swimsmooth.com" title="Swim Smooth">
          Swim Smooth
        </a>
        .
      </PageIntro>
      <WidthContainer className="pb-8">
        <p>
          To hear about new things I'm working on,{' '}
          <a
            href="https://world.hey.com/sam.stephenson"
            title="email newsletter"
          >
            subscribe to my newsletter
          </a>
          .
        </p>
      </WidthContainer>
      <WidthContainer size="lg" className="grid md:grid-cols-3 gap-8 py-4">
        {projects.featured.map((project) => (
          <ProjectThumb project={project} />
        ))}
      </WidthContainer>
      <WidthContainer>
        <ProjectList title="Other projects">
          {projects.other.map((project) => (
            <ProjectItem
              keyId={project.id}
              href={`/work/${project.id}`}
              title={project.name}
              description={project.title}
              date={project.date}
              redirect={project.redirect}
            />
          ))}
        </ProjectList>
        <ProjectList title="Experiments">
          {minorProjects.map((item) => (
            <ProjectItem
              keyId={item.title}
              title={item.title}
              description={item.description}
              href={item.url}
              date={item.date}
            />
          ))}
        </ProjectList>
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
