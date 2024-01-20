import { getTranslations } from 'next-intl/server';

import { RouterClient } from '@/components/RouterClient';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  return <RouterClient />;
}
