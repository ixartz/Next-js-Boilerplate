import React from 'react';

import Link from 'next/link';

import Date from './Date';

export function ProjectList({ title, children }) {
  return (
    <div>
      <h4 className="mt-8 uppercase text-sm mb-2 tracking-wide">{title}</h4>
      <ul className="">{children}</ul>
    </div>
  );
}

export function ProjectItem(props) {
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
