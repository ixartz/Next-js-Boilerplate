import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('RootLayout');

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
      <div className="py-5 text-xl [&_a:hover]:border-b-2 [&_a:hover]:border-blue-700 [&_a]:text-blue-700 [&_p]:my-6 [&_ul]:my-6">
        {children}
      </div>
    </BaseTemplate>
  );
}
