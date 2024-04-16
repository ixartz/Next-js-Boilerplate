/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import DropdownMenu from '@/components/DropdownMenu';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');
  const pathname = usePathname();

  if (pathname.includes('pantip')) {
    return (
      <div>
        <header>
          <nav className="px-y-4  bg-white py-2.5 lg:px-6">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between max-lg:px-4 ">
              <div className="flex items-center">
                <DropdownMenu />
                <Image
                  src="/assets/images/Pantip-logo-1.jpeg"
                  alt="Pantip logo"
                  width={50}
                  height={50}
                  className="ml-2 max-lg:hidden"
                />
              </div>
              <div className="hidden items-center lg:order-2  lg:flex">
                <div className="hover:bg-primary-800 mr-2 flex cursor-pointer items-center rounded-lg px-4 py-2 hover:rounded-full hover:bg-gray-100 lg:px-5 lg:py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                  <p className="bg-primary-700 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 pl-2  text-sm text-gray-900   focus:outline-none focus:ring-4 ">
                    ตั้งกระทู้
                  </p>
                </div>
                <div className="hover:bg-primary-800 mr-2 flex cursor-pointer items-center rounded-lg px-4 py-2 hover:rounded-full hover:bg-gray-100 lg:px-5 lg:py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>

                  <p className="bg-primary-700 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 pl-2  text-sm text-gray-900   focus:outline-none focus:ring-4 ">
                    คอมมูนิตี้
                  </p>
                </div>
                <div className="hover:bg-primary-800 mr-2 flex cursor-pointer items-center rounded-lg px-4 py-2 hover:rounded-full hover:bg-gray-100 lg:px-5 lg:py-2.5">
                  <p className="bg-primary-700 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 pl-2  text-sm text-gray-900   focus:outline-none focus:ring-4 ">
                    เข้าสู้ระบบ/สมัครสมาชิก
                  </p>
                </div>
              </div>
              <div
                className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                id="mobile-menu-2"
              >
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 block w-full min-w-96 rounded-full border border-gray-300 p-2.5 text-sm text-gray-600 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="ค้นหาบน Pantip"
                />
              </div>
              <Image
                src="/assets/images/Pantip-logo-1.jpeg"
                alt="Pantip logo"
                width={50}
                height={50}
                className="visible ml-2 lg:hidden"
              />
            </div>
          </nav>
        </header>
        {props.children}
      </div>
    );
  }

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/guestbook/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('guestbook_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('portfolio_link')}
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
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
