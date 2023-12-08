import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type IPortfolioDetailProps = {
  params: { slug: string; locale: string };
};

export async function generateStaticParams() {
  return Array.from(Array(6).keys()).map((elt) => ({
    slug: `${elt}`,
  }));
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => {
  const t = useTranslations('PortfolioSlug');

  return (
    <>
      <h1 className="capitalize">{t('header', { slug: props.params.slug })}</h1>
      <p>{t('content')}</p>
    </>
  );
};

export const dynamicParams = false;

export default PortfolioDetail;
