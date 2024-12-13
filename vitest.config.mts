import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vitest/config';

export default defineConfig({
  plugins: react(),
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
} as UserConfig);
