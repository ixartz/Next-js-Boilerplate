import type { MetadataRoute } from 'next';
import { AppConfig } from '@/utils/AppConfig';
import { getBaseUrl, getI18nPath } from '@/utils/Helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const routes = ['', '/about', '/counter', '/portfolio'];

  // Generate portfolio detail pages
  const portfolioRoutes = Array.from({ length: 6 }, (_, i) => `/portfolio/${i}`);
  const allRoutes = [...routes, ...portfolioRoutes];

  return allRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        AppConfig.locales
          .filter(locale => locale !== AppConfig.defaultLocale)
          .map(locale => [locale, `${baseUrl}${getI18nPath(route, locale)}`]),
      ),
    },
  }));
}
