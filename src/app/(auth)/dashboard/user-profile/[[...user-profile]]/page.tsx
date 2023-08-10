import { UserProfile } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User profile',
  description:
    'Seamlessly sign in to your account with our user-friendly login process.',
};

const UserProfilePage = () => (
  <div className="my-6 -ml-16">
    <UserProfile />
  </div>
);

export default UserProfilePage;
