import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Portfolio' });

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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map((elt) => (
          <Link className="border-none" key={elt} href={`/portfolio/${elt}`}>
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-28 w-full">
                <Image
                  src="/assets/images/nextjs-starter-banner.png"
                  alt="Portfolio project"
                  fill
                />
              </div>

              <div className="bg-blue-200 p-3 text-xl font-bold">
                {t('portfolio_name', { name: elt })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
