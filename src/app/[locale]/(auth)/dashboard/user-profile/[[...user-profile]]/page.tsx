import { UserProfile } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'UserProfile' });

  return {
    title: t('meta_title'),
  };
}

const UserProfilePage = () => (
  <div className="my-6 -ml-16">
    <UserProfile />
  </div>
);

export default UserProfilePage;
