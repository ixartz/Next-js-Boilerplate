import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}'],
    },
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      screenshotDirectory: 'vitest-test-results',
      instances: [
        { browser: 'chromium' },
      ],
    },
    env: loadEnv('', process.cwd(), ''),
  },
});
