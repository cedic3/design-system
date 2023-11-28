import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import angularEslint from '@angular-eslint/eslint-plugin';

export default [
  angularEslint.configs.recommended,
  {
    files: ['**/*.ts'],
    parserOptions: {
      project: ['tsconfig.json'],
      tsconfigRootDir: __dirname,
      createDefaultProgram: true,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: ['plugin:@angular-eslint/template/recommended'],
  },
];
