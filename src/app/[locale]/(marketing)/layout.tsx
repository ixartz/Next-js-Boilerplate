import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '../../../lib/I18nRouting';
import { ClerkLocalizations } from '../../../utils/AppConfig';

export default async function Layout(props: {
  params: { locale: any } | PromiseLike<{ locale: any }>;
  children: React.ReactNode;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const clerkLocale = ClerkLocalizations.supportedLocales[locale] ?? ClerkLocalizations.defaultLocale;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/';

  if (locale !== routing.defaultLocale) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
    afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  return (
    <>
      <ClerkProvider
        appearance={{
          theme: shadcn,
          cssLayerName: 'clerk', // Ensure Clerk is compatible with Tailwind CSS v4
        }}
        localization={clerkLocale}
        signInUrl={signInUrl}
        signUpUrl={signUpUrl}
        signInFallbackRedirectUrl={dashboardUrl}
        signUpFallbackRedirectUrl={dashboardUrl}
        afterSignOutUrl={afterSignOutUrl}
      >
        {props.children}
      </ClerkProvider>
    </>
  );
}
