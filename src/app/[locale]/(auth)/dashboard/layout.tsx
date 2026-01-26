import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HeroHeader } from '../../../../components/marketing/header';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'DashboardLayout',
  });

  return (
    <>
      <HeroHeader />
    </>
  );
}
