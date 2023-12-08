'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LogOutButton = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const t = useTranslations('DashboardLayout');

  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={() => signOut(() => router.push('/'))}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
