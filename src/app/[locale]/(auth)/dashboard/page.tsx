import { getTranslations } from 'next-intl/server'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  })

  return {
    title: t('meta_title'),
  }
}

const Dashboard = () => (
  // <div className="[&_p]:my-6">
  <div>&nbsp;</div>
)

export default Dashboard
