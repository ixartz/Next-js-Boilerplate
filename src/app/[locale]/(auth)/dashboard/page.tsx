import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Hello } from '@/components/Hello';
import { generateMetadataUrl, getOgImagePath, getOpenGraphLocale } from '@/utils/Helpers';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  const title = t('meta_title');
  const description = t('meta_description');
  const url = generateMetadataUrl('/dashboard', locale);

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
          url: getOgImagePath('dashboard'),
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
        en: '/en/dashboard',
        fr: '/fr/dashboard',
      },
    },
  };
}

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
