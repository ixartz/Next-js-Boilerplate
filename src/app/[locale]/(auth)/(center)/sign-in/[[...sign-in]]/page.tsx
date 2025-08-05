import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateMetadataUrl, getI18nPath, getOgImagePath, getOpenGraphLocale } from '@/utils/Helpers';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  const title = t('meta_title');
  const description = t('meta_description');
  const url = generateMetadataUrl('/sign-in', locale);

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
          url: getOgImagePath('auth'),
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
      images: [getOgImagePath('auth')],
      creator: '@ixartz',
      site: '@ixartz',
    },
    alternates: {
      canonical: url,
      languages: {
        en: '/en/sign-in',
        fr: '/fr/sign-in',
      },
    },
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
};
