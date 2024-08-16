module.exports = {
  '*': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
};
