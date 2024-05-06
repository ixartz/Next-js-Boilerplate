import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type IPortfolioDetailProps = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
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

      <div className="mt-5 text-center text-sm">
        {`${t('log_management_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
          target="_blank"
        >
          Better Stack
        </a>
      </div>

      <a
        href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
        target="_blank"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/better-stack-dark.png"
          alt="Better Stack"
          width={130}
          height={112}
        />
      </a>
    </>
  );
};

export default PortfolioDetail;
