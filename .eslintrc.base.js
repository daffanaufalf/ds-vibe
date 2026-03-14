/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref", "preferButton"]
      }
    ]
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.base.js"]
};
