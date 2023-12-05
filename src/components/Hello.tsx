import { currentUser } from '@clerk/nextjs';

const Hello = async () => {
  const user = await currentUser();

  return <p>👋 Hello {user?.emailAddresses[0]?.emailAddress}</p>;
};

export { Hello };
