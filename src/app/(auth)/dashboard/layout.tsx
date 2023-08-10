import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { signOut } = useClerk();

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.title}
            </h1>
            <h2 className="text-xl">{AppConfig.description}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap text-xl">
                <li className="mr-6">
                  <Link
                    href="/dashboard/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/dashboard/user-profile/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Manage your account
                  </Link>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap text-xl">
                <li className="mr-6">
                  <button
                    onClick={() => signOut()}
                    className="border-none text-gray-700 hover:text-gray-900"
                    type="button"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
}
