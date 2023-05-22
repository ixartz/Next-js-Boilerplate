module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache .eslintcache . --fix',
    'eslint --cache .eslintcache .',
  ],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{json,yaml}': ['prettier --write'],
};
