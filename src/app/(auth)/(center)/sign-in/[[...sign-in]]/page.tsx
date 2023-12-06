import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in',
  description:
    'Seamlessly sign in to your account with our user-friendly login process.',
};

const SignInPage = () => <SignIn />;

export default SignInPage;
