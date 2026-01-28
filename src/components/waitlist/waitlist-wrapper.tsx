'use client';

import { useEffect, useState } from 'react';
import { AlreadyJoined } from './already-joined';
import { WaitlistForm } from './waitlist-form';

type WaitlistData = {
  name: string;
  email: string;
  role: string;
};

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }
  return null;
}

export function WaitlistWrapper() {
  const [existingData, setExistingData] = useState<WaitlistData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cookieData = getCookie('waitlist_data');
    if (cookieData) {
      try {
        const parsed = JSON.parse(cookieData);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setExistingData(parsed);
      } catch {
        // Invalid cookie data, ignore
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl bg-card shadow-sm">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-accent" />
      </div>
    );
  }

  if (existingData) {
    return <AlreadyJoined data={existingData} />;
  }

  return <WaitlistForm />;
}
