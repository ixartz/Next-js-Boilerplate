import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
