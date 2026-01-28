'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();

  const [purpose, setPurpose] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = async () => {
    if (!user) {
      return;
    }

    // 1️⃣ Save info to DB
    await fetch('/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, purpose, source }),
    });

    // 2️⃣ Update Clerk metadata
    await user.update({
      unsafeMetadata: { onboarding: { completed: true, skipped: false } },
    });

    router.push('/dashboard');
  };

  const handleSkip = async () => {
    if (!user) {
      return;
    }

    await user.update({
      unsafeMetadata: { onboarding: { completed: false, skipped: true } },
    });

    router.push('/dashboard');
  };

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 py-20">
      <h1 className="text-2xl font-bold">Welcome! Let's get started.</h1>

      <label>
        Why are you using our app?
        <input
          value={purpose}
          onChange={e => setPurpose(e.target.value)}
          className="w-full rounded border p-2"
        />
      </label>

      <label>
        How did you hear about us?
        <input
          value={source}
          onChange={e => setSource(e.target.value)}
          className="w-full rounded border p-2"
        />
      </label>

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleSubmit}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Complete
        </button>

        <button
          onClick={handleSkip}
          className="rounded bg-gray-300 px-4 py-2 text-black"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
