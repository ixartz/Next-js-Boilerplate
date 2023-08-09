import { SignUp } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign up',
  description:
    'Seamlessly sign in to your account with our user-friendly login process.',
};

const SignUpPage = () => <SignUp />;

export default SignUpPage;
