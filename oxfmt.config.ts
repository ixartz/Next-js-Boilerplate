import { defineConfig } from 'oxfmt';
import ultracite from 'ultracite/oxfmt';

export default defineConfig({
  extends: [ultracite],
  singleQuote: true,
  ignorePatterns: ['migrations/*', '*.md'],
  sortTailwindcss: {
    stylesheet: 'src/styles/global.css',
  },
  // Keep JSON/JSONC output consistent between the CLI and VS Code, more info at https://github.com/oxc-project/oxc-vscode/issues/140
  overrides: [
    {
      files: ['**/*.json', '**/*.jsonc'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
});
