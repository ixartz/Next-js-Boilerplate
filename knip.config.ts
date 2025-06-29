import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    'checkly.config.ts',
    'unlighthouse.config.ts',
    'src/libs/I18n.ts',
    'src/types/I18n.ts',
    'tests/**/*.ts',
  ],
  ignoreDependencies: [
    '@commitlint/types',
    '@clerk/types',
    'conventional-changelog-conventionalcommits',
    'vite',
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
