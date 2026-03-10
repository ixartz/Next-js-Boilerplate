import { describe, expect, it, vi } from 'vitest';
import { routing } from '@/libs/I18nRouting';
import { getBaseUrl, getI18nPath } from './Helpers';

vi.mock('@/libs/Env', () => ({
  Env: {
    get NEXT_PUBLIC_APP_URL() {
      return process.env.TEST_APP_URL;
    },
  },
}));

describe('Helpers', () => {
  describe('getI18nPath', () => {
    it('returns the path unchanged for the default locale', () => {
      const url = '/random-url';
      const locale = routing.defaultLocale;

      expect(getI18nPath(url, locale)).toBe(url);
    });

    it('prepends the locale to the path for a non-default locale', () => {
      const url = '/random-url';
      const locale = 'fr';

      expect(getI18nPath(url, locale)).toMatch(/^\/fr/);
    });
  });

  describe('getBaseUrl', () => {
    it('returns NEXT_PUBLIC_APP_URL when set', () => {
      process.env.TEST_APP_URL = 'https://example.com';

      expect(getBaseUrl()).toBe('https://example.com');

      delete process.env.TEST_APP_URL;
    });

    it('falls back to localhost:3000 when NEXT_PUBLIC_APP_URL is not set', () => {
      delete process.env.TEST_APP_URL;

      expect(getBaseUrl()).toBe('http://localhost:3000');
    });
  });
});
