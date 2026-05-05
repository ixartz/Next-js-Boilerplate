'use client';

import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/sign-in');
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
    >
      Sign out
    </button>
  );
}
