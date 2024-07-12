import { getTranslations } from 'next-intl/server'
import DataTableComponent from 'src/components/primereact/data-table'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Portfolio',
  })

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default function Playground() {
  return (
    <div className="container mx-auto max-w-2xl">
      <DataTableComponent sportType="soccer" />
    </div>
  )
}
