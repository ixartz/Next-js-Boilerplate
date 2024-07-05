import { getTranslations } from 'next-intl/server';
import TabsBarWithUnderlineMain from 'src/components/tailwind-ui/application-ui/navigation/tabs/bar_with_underline_main';
// import HeroSimpleCentredWithBackgroundImage from "src/components/tailwind-ui/marketing/sections/heroes/simple_centered_with_background_image";

import DataTableComponent from 'src/components/primereact/data-table';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div>
      <TabsBarWithUnderlineMain />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DataTableComponent sportType="soccer" />
        <DataTableComponent sportType="americanfootball_nfl" />
      </div>

      {/* <HeroSimpleCentredWithBackgroundImage /> */}
    </div>
  );
}
