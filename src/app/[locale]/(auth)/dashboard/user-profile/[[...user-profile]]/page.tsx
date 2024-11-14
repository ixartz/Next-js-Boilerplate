import { getI18nPath } from '@/utils/Helpers';
import { UserProfile } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const UserProfilePage = async (props: { params: Promise<{ locale: string }> }) => {
  const { locale } = await props.params;

  return (
    <div className="my-6 -ml-16">
      <UserProfile
        path={getI18nPath('/dashboard/user-profile', locale)}
      />
    </div>
  );
};

export default UserProfilePage;
