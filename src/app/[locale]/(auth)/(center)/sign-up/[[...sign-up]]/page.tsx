import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SignUpForm } from './SignUpForm';

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Create a new account.',
};

type Props = { params: Promise<{ locale: string }> };

export default async function SignUpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SignUpForm />;
}
