import React from 'react';

import Link from 'next/link';

import { Config } from '../utils/Config';

export default function Navigation() {
  return (
    <div className=" flex justify-between">
      <div className="">
        <div className="">{Config.title}</div>
        <div className="">{Config.description}</div>
      </div>
      <div>
        <ul className="flex space-x-4 flex-wrap">
          <li className="">
            <Link href="/">
              <a className="">Work</a>
            </Link>
          </li>
          <li className="">
            <Link href="/blog/">
              <a className="">Notes</a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a className="">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
