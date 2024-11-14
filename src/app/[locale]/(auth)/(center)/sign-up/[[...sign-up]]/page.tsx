import { getI18nPath } from '@/utils/Helpers';
import { SignUp } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignUpPage = async (props: { params: Promise<{ locale: string }> }) => {
  const { locale } = await props.params;

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
};

export default SignUpPage;
