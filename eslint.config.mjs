import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",  // 自动检测 React 的版本
      },
    },
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    // 为 .cjs 文件单独定义 CommonJS 环境
    files: ["**/*.cjs"],
    languageOptions: {
      globals: globals.node, // Node.js 环境全局变量
    },
    env: {
      commonjs: true, // 启用 CommonJS 环境
    },
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
