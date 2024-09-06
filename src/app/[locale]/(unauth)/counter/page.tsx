import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Counter',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Counter = () => {
  const t = useTranslations('Counter');

  return (
    <>
      <CounterForm />

      <div className="mt-3">
        <Suspense fallback={<p>{t('loading_counter')}</p>}>
          <CurrentCount />
        </Suspense>
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('error_reporting_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
        >
          Sentry
        </a>
      </div>

      <a
        href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/sentry-dark.png"
          alt="Sentry"
          width={130}
          height={112}
        />
      </a>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Counter;
