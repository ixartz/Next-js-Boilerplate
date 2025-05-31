import type { routing } from '@/libs/i18nRouting';
import type messages from '@/locales/en.json';

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
