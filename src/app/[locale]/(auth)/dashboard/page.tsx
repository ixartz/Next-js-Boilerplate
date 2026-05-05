import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard',
};

type Props = { params: Promise<{ locale: string }> };

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const cookieStore = await cookies();
  const userDataCookie = cookieStore.get('user_data')?.value;

  if (!userDataCookie) {
    redirect('/sign-in');
  }

  const user = JSON.parse(userDataCookie) as unknown as { id: string; name: string; email: string };

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Welcome back</h2>
        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-medium">User ID:</span>{' '}
            <span className="font-mono text-sm">{user.id}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
