module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "arrow-parens": "off",
    "no-plusplus": "off",
    "jsx-a11y/heading-has-content": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
