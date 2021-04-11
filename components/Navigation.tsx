import React from 'react';

import Link from 'next/link';

import { Config } from '../utils/Config';

export default function Navigation() {
  return (
    <div className=" flex justify-between">
      <div className="">
        <Link href="/">
          <a className="inline-block text-gray-800 dark:text-gray-200">{Config.title}</a>
        </Link>
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
