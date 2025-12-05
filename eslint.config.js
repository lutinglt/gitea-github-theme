import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig({
  ignores: ["dist"],
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
});
