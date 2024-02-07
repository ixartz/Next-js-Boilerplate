import { withSentryConfig } from '@sentry/nextjs';
/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import './src/libs/Env.mjs';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      experimental: {
        // Related to Pino error with RSC: https://github.com/orgs/vercel/discussions/3150
        serverComponentsExternalPackages: ['pino'],
      },
      webpack: (config) => {
        // config.externals is needed to resolve the following errors:
        // Module not found: Can't resolve 'bufferutil'
        // Module not found: Can't resolve 'utf-8-validate'
        config.externals.push({
          bufferutil: 'bufferutil',
          'utf-8-validate': 'utf-8-validate',
        });

        return config;
      },
    }),
  ),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    // FIXME: Add your Sentry organization and project names
    org: 'nextjs-boilerplate-org',
    project: 'nextjs-boilerplate',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
