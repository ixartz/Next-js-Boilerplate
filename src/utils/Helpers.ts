import { routing } from '@/libs/I18nRouting';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export function generateMetadataUrl(path: string, locale: string): string {
  const baseUrl = 'https://demo.nextjs-boilerplate.com';
  return `${baseUrl}/${locale}${path}`;
}

export function getOgImagePath(pageType: 'default' | 'auth' | 'dashboard' = 'default'): string {
  const imageMap = {
    default: '/assets/images/nextjs-starter-banner.png',
    auth: '/assets/images/nextjs-boilerplate-sign-in.png',
    dashboard: '/assets/images/nextjs-boilerplate-saas.png',
  };

  return imageMap[pageType];
}
