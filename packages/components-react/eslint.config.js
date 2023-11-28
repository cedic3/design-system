import eslint from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactEslint from 'eslint-plugin-react';

import typescriptParser from '@typescript-eslint/parser';
import react from 'react';

import globals from 'globals';

export default [
  eslint.configs.recommended,
  typescriptEslint.configs.recommended,
  reactEslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    plugins: { react },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
