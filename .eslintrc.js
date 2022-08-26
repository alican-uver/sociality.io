module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-tabs": 0,
    "no-void": 0,
    "quotes": ["error", "single"],
    "eol-last": 0,
    "trailing-comma": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-array-index-key": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-param-reassign": 0,
    "react/jsx-wrap-multilines": [
      "warn",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": "[iI]gnored"
      }
    ],
    "max-len": ["warn", { "code": 120 }],
    "react/destructuring-assignment": ["warn", "always", { "ignoreClassFields": true }]
  },
};
