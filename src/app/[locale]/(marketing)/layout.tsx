import { DemoBanner } from '@/components/DemoBanner';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import arcjet, { detectBot, request } from '@/libs/Arcjet';
import { BaseTemplate } from '@/templates/BaseTemplate';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE',
    // Block all bots except the following
    allow: [
      // See https://docs.arcjet.com/bot-protection/identifying-bots
      'CATEGORY:SEARCH_ENGINE', // Allow search engines
      'CATEGORY:PREVIEW', // Allow preview links to show OG images
      'CATEGORY:MONITOR', // Allow uptime monitoring services
    ],
  }),
);

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  const req = await request();
  const decision = await aj.protect(req);

  // These errors are handled by the global error boundary, but you could also
  // redirect or show a custom error page
  if (decision.isDenied()) {
    if (decision.reason.isBot()) {
      throw new Error('No bots allowed');
    }

    throw new Error('Access denied');
  }

  return (
    <>
      <DemoBanner />
      <BaseTemplate
        leftNav={(
          <>
            <li>
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('home_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('about_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/counter/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('counter_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('portfolio_link')}
              </Link>
            </li>
            <li>
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="/sign-in/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_in_link')}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_up_link')}
              </Link>
            </li>

            <li>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
