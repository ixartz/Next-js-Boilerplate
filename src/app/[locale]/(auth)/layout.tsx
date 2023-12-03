import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout({
  children, // will be a page or nested layout
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;

  if (locale === 'fr') {
    clerkLocale = frFR;
  }

  return <ClerkProvider localization={clerkLocale}>{children}</ClerkProvider>;
}
