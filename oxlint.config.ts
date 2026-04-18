import { defineConfig } from 'oxlint';

import core from 'ultracite/oxlint/core';
import next from 'ultracite/oxlint/next';
import react from 'ultracite/oxlint/react';

export default defineConfig({
  extends: [core, react, next],
  rules: {
    'no-warning-comments': 'off', // Allow TODO and FIXME comments
    'no-inline-comments': 'off',

    'sort-keys': 'off',
    'func-style': 'off',

    'typescript/no-unsafe-assignment': 'off',
    'typescript/no-unsafe-member-access': 'off',
    'typescript/no-unsafe-call': 'off',
    'typescript/strict-boolean-expressions': 'off',
    'typescript/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
    'typescript/no-misused-promises': 'off', // React Hook Form's handleSubmit returns a Promise-typed handler
    'typescript/prefer-readonly-parameter-types': 'off',
    'typescript/prefer-regexp-exec': 'off',
    'typescript/strict-void-return': 'off',

    'react-perf/jsx-no-new-function-as-prop': 'off',

    'unicorn/filename-case': 'off', // Impossible to enforce consistent filename case due to multiple conventions

    // --- JSDoc Rules ---
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-description': 'error',
  },
  options: {
    reportUnusedDisableDirectives: 'error',
  },
});
