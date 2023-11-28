import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import stencil from '@stencil-community/eslint-plugin';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  typescript.configs.recommended,
  stencil.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.eslint.json',
      },
    },
    rules: {
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@stencil-community/strict-boolean-conditions': 'off',
      '@stencil-community/required-prefix': ['error', ['post-']],
      '@stencil-community/async-methods': 'error',
      '@stencil-community/decorators-context': 'error',
      '@stencil-community/decorators-style': [
        'error',
        {
          prop: 'inline',
          state: 'inline',
          element: 'inline',
          event: 'inline',
          method: 'multiline',
          watch: 'multiline',
          listen: 'multiline',
        },
      ],
      '@stencil-community/class-pattern': [
        'error',
        {
          pattern: '^Post.*(?!Component)$',
        },
      ],
      '@stencil-community/element-type': 'error',
      '@stencil-community/host-data-deprecated': 'error',
      '@stencil-community/methods-must-be-public': 'error',
      '@stencil-community/no-unused-watch': 'error',
      '@stencil-community/own-methods-must-be-private': 'error',
      '@stencil-community/own-props-must-be-private': 'error',
      '@stencil-community/prefer-vdom-listener': 'error',
      '@stencil-community/props-must-be-public': 'error',
      '@stencil-community/props-must-be-readonly': 'error',
      '@stencil-community/render-returns-host': 'error',
      '@stencil-community/required-jsdoc': 'error',
      '@stencil-community/reserved-member-names': 'error',
      '@stencil-community/single-export': 'error',
      '@stencil-community/strict-mutable': 'error',
      'react/jsx-no-bind': 'off',
    },
  },
];
