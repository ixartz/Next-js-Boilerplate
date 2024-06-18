/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'checkly';
import { EmailAlertChannel, Frequency } from 'checkly/constructs';

const emailChannel = new EmailAlertChannel('email-channel-1', {
  // FIXME: add your own email address, Checkly will send you an email notification if a check fails
  address: 'flavio.ever@outlook.com',
  sendDegraded: true,
});

export const config = defineConfig({
  projectName: 'Next.js Boilerplate Test',
  logicalId: 'nextjs-boilerplate',
  repoUrl: 'https://github.com/ixartz/Next-js-Boilerplate',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2023.09',
    environmentVariables: [
      {
        key: 'PRODUCTION_URL',
        // FIXME: Add your own production URL
        value: 'https://www.flavioever.dev',
      },
    ],
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/tests/e2e/**/*.check.spec.ts',
      alertChannels: [emailChannel],
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
