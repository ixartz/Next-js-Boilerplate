import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mx-14 antialiased">
    {props.meta}
    <div>
      <header className="mt-11 pb-6">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="w-80 max-w-xs font-avenir text-4.5xl text-black">
            {AppConfig.title.toUpperCase()}
          </h1>
          <nav>
            <ul className="flex flex-wrap">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none font-avenir text-sm text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/about/"
                  className="border-none font-avenir text-sm text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li className="mr-6">
                <a
                  className="border-none font-avenir text-sm text-gray-700 hover:text-gray-900"
                  href="https://github.com/ixartz/Next-js-Boilerplate"
                >
                  Projects
                </a>
              </li>
              <li className="mr-6">
                <Link
                  href="/blog/"
                  className="border-none font-avenir text-sm text-gray-700 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-80" />
        </div>
      </header>
      <div className="mx-6 border-b border-black" />

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        <div className="pb-3">chrisozgo99@gmail.com</div>©
        {new Date().getFullYear()} {AppConfig.title}. Made with ❤️.
      </footer>
    </div>
  </div>
);

export { Main };
