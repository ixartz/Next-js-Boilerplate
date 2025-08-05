import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { generateMetadataUrl, getOgImagePath, getOpenGraphLocale } from '@/utils/Helpers';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  const title = t('meta_title');
  const description = t('meta_description');
  const url = generateMetadataUrl('/about', locale);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Next.js Boilerplate',
      images: [
        {
          url: getOgImagePath(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: getOpenGraphLocale(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [getOgImagePath('dashboard')],
      creator: '@ixartz',
      site: '@ixartz',
    },
    alternates: {
      canonical: url,
      languages: {
        en: '/en/about',
        fr: '/fr/about',
      },
    },
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return (
    <>
      <p>{t('about_paragraph')}</p>

      <div className="mt-2 text-center text-sm">
        {`${t('translation_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
        >
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/crowdin-dark.png"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
      </a>
    </>
  );
};
