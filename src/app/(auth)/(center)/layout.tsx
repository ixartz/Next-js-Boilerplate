import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

export default function CenteredLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
