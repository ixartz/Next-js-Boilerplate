import { setRequestLocale } from 'next-intl/server';
import { Hello } from '@/components/Hello';

export default async function DashboardPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
