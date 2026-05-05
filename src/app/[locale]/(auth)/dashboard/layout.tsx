import { setRequestLocale } from 'next-intl/server';
import { SignOutButton } from '@/components/SignOutButton';
import { Link } from '@/libs/I18nNavigation';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <BaseTemplate
      leftNav={
        <li>
          <Link href="/dashboard/" className="border-none text-gray-700 hover:text-gray-900">
            Dashboard
          </Link>
        </li>
      }
      rightNav={
        <li>
          <SignOutButton />
        </li>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
