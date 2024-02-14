'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HOME, SIGNIN, SIGNUP } from '@/routes';

const navLinks = [
  {
    title: 'Signin',
    link: SIGNIN,
  },
  {
    title: 'Signup',
    link: SIGNUP,
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className='flex items-center justify-between gap-5 p-5 '>
        <Link href={HOME} className='font-bold'>
          Geeks Boilerplate
        </Link>
        <ul className='flex items-center gap-5'>
          {navLinks.map((item) => (
            <li
              key={item.title}
              className={classNames({
                'border-b border-red-600 font-semibold': pathname === item.link,
              })}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
