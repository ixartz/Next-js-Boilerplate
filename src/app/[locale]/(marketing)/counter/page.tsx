import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Suspense } from 'react';
import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';
import { generateMetadataUrl, getOgImagePath, getOpenGraphLocale } from '@/utils/Helpers';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Counter',
  });

  const title = t('meta_title');
  const description = t('meta_description');
  const url = generateMetadataUrl('/counter', locale);

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
      images: [getOgImagePath()],
      creator: '@ixartz',
      site: '@ixartz',
    },
    alternates: {
      canonical: url,
      languages: {
        en: '/en/counter',
        fr: '/fr/counter',
      },
    },
  };
}

export default function Counter() {
  const t = useTranslations('Counter');

  return (
    <>
      <CounterForm />

      <div className="mt-3">
        <Suspense fallback={<p>{t('loading_counter')}</p>}>
          <CurrentCount />
        </Suspense>
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('security_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://launch.arcjet.com/Q6eLbRE"
        >
          Arcjet
        </a>
      </div>

      <a
        href="https://launch.arcjet.com/Q6eLbRE"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>
    </>
  );
};
