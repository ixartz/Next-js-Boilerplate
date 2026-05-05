import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SignInForm } from './SignInForm';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your account.',
};

type Props = { params: Promise<{ locale: string }> };

export default async function SignInPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SignInForm />;
}
