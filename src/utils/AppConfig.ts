import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// Cấu hình cho i18n (next-intl)
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
