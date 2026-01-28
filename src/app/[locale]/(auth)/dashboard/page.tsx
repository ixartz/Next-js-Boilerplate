import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default function Dashboard() {
  // const user = await currentUser();

  // if (!user) {
  //   redirect('/sign-in');
  // }

  // const onboarding = user.publicMetadata.onboarding as any;

  // if (!onboarding?.completed && !onboarding?.skipped) {
  //   redirect('/onboarding');
  // }
  return (
    <div className="py-5 [&_p]:my-6">
      You are in dashboard
    </div>
  );
}
