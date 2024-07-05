module.exports = {
  extends: [
    'airbnb-base',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto'
      }
    ]
    // Other rules...
  },
  overrides: [
    // Your overrides configuration...
  ]
};
