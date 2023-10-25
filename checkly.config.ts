/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'checkly';
import { Frequency } from 'checkly/constructs';

const config = defineConfig({
  projectName: 'Next.js Boilerplate',
  logicalId: 'nextjs-boilerplate',
  repoUrl: 'https://github.com/ixartz/Next-js-Boilerplate',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2023.09',
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
