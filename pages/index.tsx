import React from "react";

import { minorProjects } from "../_data/homepageData";
import { PageIntro } from "../components/PageIntro";
import { ProjectGallery } from "../components/ProjectGallery";
import { ProjectItem, ProjectList } from "../components/ProjectList";
import { ProjectThumb } from "../components/ProjectThumb";
import { WidthContainer } from "../components/WidthContainer";
import { Main } from "../layout/Main";
import { Meta } from "../layout/Meta";
import { getSortedPageData } from "../utils/generatePages";

export default function Index({ allPostsData }) {
  // Split projects in to featured/not
  const featured = ["swim-smooth", "sow", "trustify", "nepal"];
  const projects = {
    featured: allPostsData.filter((project) => featured.includes(project.id)),
    other: allPostsData.filter((project) => !featured.includes(project.id)),
  };

  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer."
        />
      }
    >
      <PageIntro>
        I&apos;m Sam. a London based product designer, working on tools to help
        us think and create in new ways.
      </PageIntro>
      <WidthContainer className="pb-8" leftAligned>
        <p>
          I&apos;m currently in charge of design at{" "}
          <a href="https://ideaflow.io" title="Ideaflow">
            Ideaflow
          </a>
          . To hear about new things I&apos;m working on,{" "}
          <a
            href="https://world.hey.com/sam.stephenson"
            title="email newsletter"
          >
            subscribe to my newsletter
          </a>
          .
        </p>
      </WidthContainer>
      <ProjectGallery>
        {projects.featured.map((project) => (
          <ProjectThumb project={project} key={project.id} />
        ))}
        <div className="hidden w-24 h-12 lg:inline lg:pr-24" />
      </ProjectGallery>
      <WidthContainer leftAligned>
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
  const allPostsData = getSortedPageData("_work");
  return {
    props: {
      allPostsData,
    },
  };
}
