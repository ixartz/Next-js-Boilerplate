import { getI18nPath } from '@/utils/Helpers';
import { SignIn } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = async (props: { params: Promise<{ locale: string }> }) => {
  const locale = (await props.params).locale;

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
};

export default SignInPage;
