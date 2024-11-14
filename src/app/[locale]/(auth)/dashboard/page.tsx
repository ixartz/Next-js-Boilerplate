import { Hello } from '@/components/Hello';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div className="[&_p]:my-6">
    <Hello />
  </div>
);

export default Dashboard;
