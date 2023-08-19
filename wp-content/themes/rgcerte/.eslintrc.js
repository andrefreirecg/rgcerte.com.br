module.exports = {
    extends: ["airbnb", "plugin:sonarjs/recommended"],
    plugins: ["sonarjs"],
    env: {
      browser: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      jsx: true,
    },
    rules: {
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "import/first": "off",
    },
    globals: {
      window: true,
      jQuery: true,
      wp: true,
    },
  };
  