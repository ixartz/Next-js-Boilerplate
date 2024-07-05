/* eslint-disable */ //** remove */
const { FlatCompat } = require("@eslint/eslintrc");

const path = require("path");
const { fileURLToPath } = require("url");

const compat = new FlatCompat({
  baseDirectory: path.dirname(
    fileURLToPath(require("url").pathToFileURL(__filename).toString())
  ),
});

module.exports = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     ecmaVersion: 2023,
    //     sourceType: 'module',
    // },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          endOfLine: "auto",
        },
      ],
      // Other rules...
    },
  }
];
