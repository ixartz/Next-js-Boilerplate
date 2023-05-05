'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const navLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center justify-between gap-5 py-5'>
      <Link href='/'>GOK</Link>
      <ul className='flex items-center gap-5'>
        {navLinks.map((item) => (
          <li
            key={item.title}
            className={classNames({
              'border-b border-blue-600 font-semibold': pathname === item.link,
            })}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
