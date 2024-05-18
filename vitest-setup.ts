/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest';

import failOnConsole from 'vitest-fail-on-console';

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: true,
  shouldFailOnInfo: true,
  shouldFailOnLog: true,
  shouldFailOnWarn: true,
});
