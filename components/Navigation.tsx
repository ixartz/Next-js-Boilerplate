import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Config } from '../utils/Config';

const menu = [
  { title: 'Work', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
];

export default function Navigation() {
  const router = useRouter();
  console.log('query', router.query.id);
  console.log('pathname', router.pathname);
  return (
    <ul className="flex space-x-3">
      <Link href="/">
        <a className="inline-block text-primary">{Config.title}</a>
      </Link>
      <p className="text-tertiary">/</p>
      {menu.map((item) => (
        <Link href={item.path}>
          <a
            className={`cursor-pointer ${
              router.pathname === item.path ||
              '/' + router.query.id === item.path
                ? 'text-primary'
                : 'text-secondary'
            }`}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </ul>
  );
}
