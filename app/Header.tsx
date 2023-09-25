'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import Container from 'src/components/Container';

const navLinks = [
  {
    title: 'Pricing',
    link: '/pricing',
  },
  {
    title: 'About',
    link: '/about',
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <Container>
      <nav className='flex items-center justify-between gap-5 py-5'>
        <Link href='/'>LinkaX</Link>
        <ul className='flex items-center gap-5'>
          {navLinks.map((item) => (
            <li
              key={item.title}
              className={classNames({
                'border-b border-blue-600 font-semibold':
                  pathname === item.link,
              })}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
