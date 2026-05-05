import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: [
    'checkly.config.ts',
    'src/libs/I18n.ts',
    'src/libs/I18nNavigation.ts',
    'src/types/I18n.ts',
    'tests/**/*.ts',
    'src/libs/Arcjet.ts',
    'src/libs/DB.ts',
    'src/libs/Logger.ts',
    'src/utils/DBConnection.ts',
  ],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@commitlint/types',
    '@swc/helpers', // Avoid error in CI: "`npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync."
    'postcss',
    'vite',
    '@arcjet/next',
    '@hookform/resolvers',
    '@logtape/logtape',
    'react-hook-form',
    '@spotlightjs/spotlight',
  ],
  // Binaries to ignore during analysis
  ignoreBinaries: [
    'production', // False positive raised with dotenv-cli
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
