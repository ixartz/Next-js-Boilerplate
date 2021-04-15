import React from 'react';

import Link from 'next/link';

import Date from '../components/Date';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getSortedPageData } from '../utils/generatePages';

export async function getStaticProps() {
  const allPostsData = getSortedPageData('_work');
  return {
    props: {
      allPostsData,
    },
  };
}

const minorProjects = [
  {
    title: 'Interval',
    url: 'https://interval.fyi',
    description: 'A simple clock built in Javacript',
    date: '2021',
  },
  {
    title: 'Sounds of London',
    url: 'https://youtube.com/playlist?list=PLk7ZSGp92uM-NK0Fg9cp_8pZs4Ek-KQhA',
    description: 'Binauaral audio recordings from around London',
    date: '2021',
  },
  {
    title: 'Commentative',
    url: 'https://github.com/Commentative/commentative',
    description: 'Hackathon project · Add your thoughts when sharing content',
    date: '2020',
  },
];

const contactInfo = [
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/stephensonsam',
  },
  {
    title: 'Twitter',
    url: 'https://linkedin.com/stephensonsam',
  },
  {
    title: 'Github',
    url: 'https://linkedin.com/stephensonsam',
  },
];

function ProjectList({ title, children }) {
  return (
    <>
      <h4 className="mt-8 uppercase text-sm mb-2 tracking-wide">{title}</h4>
      <ul className="">{children}</ul>
    </>
  );
}

function ProjectItem(props) {
  return (
    <li key={props.key} className="flex justify-between space-x-4">
      <div>
        <Link href={props.href}>
          <a className="">
            {props.title}
            &nbsp;
          </a>
        </Link>
        <span className="text-gray-600 dark:text-gray-500">
          &middot;&nbsp;
          {props.description}
        </span>
      </div>
      <span className="text-gray-600 dark:text-gray-500">
        {props.date && <Date dateString={props.date} yearOnly />}
      </span>
    </li>
  );
}

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
        {minorProjects.map((item, i) => (
          <ProjectItem
            key={i}
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
