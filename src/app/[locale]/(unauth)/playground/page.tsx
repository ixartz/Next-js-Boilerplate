import { getTranslations } from 'next-intl/server'
import TabsBarWithUnderlineMain from 'src/components/tailwind-ui/application-ui/navigation/tabs/bar_with_underline_main'
import DataTableComponent from 'src/components/primereact/data-table'

// import HeroSimpleCentredWithBackgroundImage from "src/components/tailwind-ui/marketing/sections/heroes/simple_centered_with_background_image";
// import SideNavWithExpandableSections from '../components/tailwind-ui/application-ui/navigation/sidebar-navigation/with_expandable_sections'
// import TabsBarWithUnderline from '../components/tailwind-ui/application-ui/navigation/tabs/bar_with_underline_header'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  })

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
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

      {/* <div className="w-64 mr-4 hidden sm:block">
              <SideNavWithExpandableSections />
            </div> */}
      {/* <nav className="w-full bg-green-800">
            <div className="mx-auto max-w-screen-xl">
              <TabsBarWithUnderline />
            </div>
          </nav> */}
    </div>
  )
}
