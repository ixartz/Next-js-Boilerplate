import { getTranslations } from 'next-intl/server';
import { RegisterForm } from './_components/RegisterForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SignUp' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <RegisterForm />
    </div>
  );
}
