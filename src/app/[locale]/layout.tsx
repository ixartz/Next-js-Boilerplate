import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { DemoBadge } from '@/components/DemoBadge';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://demo.nextjs-boilerplate.com'),
  title: {
    default: 'Next.js Boilerplate',
    template: '%s | Next.js Boilerplate',
  },
  description: 'Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Boilerplate', 'Starter'],
  authors: [{ name: 'CreativeDesignsGuru' }],
  creator: 'CreativeDesignsGuru',
  publisher: 'CreativeDesignsGuru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://demo.nextjs-boilerplate.com',
    siteName: 'Next.js Boilerplate',
    title: 'Next.js Boilerplate',
    description: 'Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.',
    images: [
      {
        url: '/assets/images/nextjs-starter-banner.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Boilerplate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ixartz',
    creator: '@ixartz',
    title: 'Next.js Boilerplate',
    description: 'Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.',
    images: ['/assets/images/nextjs-starter-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider>

          <DemoBadge />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
