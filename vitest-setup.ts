import failOnConsole from 'vitest-fail-on-console';
import '@testing-library/jest-dom/vitest';

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: true,
  shouldFailOnInfo: true,
  shouldFailOnLog: true,
  shouldFailOnWarn: true,
});
