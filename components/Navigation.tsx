import Link from 'next/link';
import React from 'react';
import { Config } from '../utils/Config';

export default function Navigation() {
  return (
    <ul className="flex space-x-3">
      <Link href="/">
        <a className="inline-block text-primary">{Config.title}</a>
      </Link>
      <p className="text-tertiary">/</p>
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
  );
}
