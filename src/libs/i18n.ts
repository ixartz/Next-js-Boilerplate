import { getRequestConfig } from 'next-intl/server';

// Using internationalization in Server Components
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../locales/${locale}.json`)).default,
}));
