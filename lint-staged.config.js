module.exports = {
  '*.tsx': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
};
