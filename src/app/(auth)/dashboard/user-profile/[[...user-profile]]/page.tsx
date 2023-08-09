import { UserProfile } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign up',
  description:
    'Seamlessly sign in to your account with our user-friendly login process.',
};

const UserProfilePage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <UserProfile />
  </div>
);

export default UserProfilePage;
