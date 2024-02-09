import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Portfolio = () => {
  const t = useTranslations('Portfolio');

  return (
    <>
      <p>{t('presentation')}</p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map((elt) => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/portfolio/${elt}`}
          >
            {t('portfolio_name', { name: elt })}
          </Link>
        ))}
      </div>

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

export default Portfolio;
