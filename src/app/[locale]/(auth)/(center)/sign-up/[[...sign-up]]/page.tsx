import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateMetadataUrl, getI18nPath, getOgImagePath, getOpenGraphLocale } from '@/utils/Helpers';

type ISignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignUpPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  const title = t('meta_title');
  const description = t('meta_description');
  const url = generateMetadataUrl('/sign-up', locale);

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
          url: getOgImagePath('signup'),
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
      images: [getOgImagePath('signup')],
      creator: '@ixartz',
      site: '@ixartz',
    },
    alternates: {
      canonical: url,
      languages: {
        en: '/en/sign-up',
        fr: '/fr/sign-up',
      },
    },
  };
}

export default async function SignUpPage(props: ISignUpPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
};
