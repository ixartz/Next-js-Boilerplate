import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type DashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: DashboardPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Dashboard' });

  return {
    title: t('meta_title'),
  };
}

export default async function DashboardPage(props: DashboardPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Dashboard' });

  return (
    <div className="py-5 [&_p]:my-6">
      <p>{t('welcome_message')}</p>
    </div>
  );
}
