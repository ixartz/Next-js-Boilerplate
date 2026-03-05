import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hello } from '@/components/Hello';

type DashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: DashboardPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function DashboardPage(props: DashboardPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
