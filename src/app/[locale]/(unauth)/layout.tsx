import Link from 'next/link';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/guestbook/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Guestbook
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a
              className="border-none text-gray-700 hover:text-gray-900"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Sign in
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Sign up
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_a:hover]:border-b-2 [&_a:hover]:border-blue-700 [&_a]:text-blue-700 [&_p]:my-6 [&_ul]:my-6">
        {children}
      </div>
    </BaseTemplate>
  );
}
