// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  // For regular JS files (Node.js)
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  // For test files (Jest)
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
