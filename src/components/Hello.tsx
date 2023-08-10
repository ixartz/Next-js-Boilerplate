'use client';

import { useUser } from '@clerk/nextjs';

const Hello = () => {
  const { user } = useUser();

  return <p>Hello {user?.primaryEmailAddress?.toString()}</p>;
};

export { Hello };
