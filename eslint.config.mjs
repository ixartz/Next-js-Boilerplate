import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default antfu(
  {
    react: true,
    typescript: true,
    lessOpinionated: true,
    stylistic: {
      semi: true,
    },
    formatters: {
      css: true,
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "style/quotes": "off",
    },
  },
  {
    rules: {
      "antfu/no-top-level-await": "off",
      "style/brace-style": ["error", "1tbs"],
      "ts/consistent-type-definitions": ["error", "type"],
      "react/prefer-destructuring-assignment": "off",
      "node/prefer-global/process": "off",
    },
  },
);
