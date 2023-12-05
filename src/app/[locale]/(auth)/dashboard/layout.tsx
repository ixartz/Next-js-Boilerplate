import Link from 'next/link';

import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout({
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
              href="/dashboard/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Manage your account
            </Link>
          </li>
        </>
      }
      rightNav={
        <li>
          <LogOutButton />
        </li>
      }
    >
      {children}
    </BaseTemplate>
  );
}
