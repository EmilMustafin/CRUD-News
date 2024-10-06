const customRules = require('./config/eslint/custom-rules.cts');

const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:boundaries/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: [
    '!.*',
    'node_modules',
    'coverage',
    'dist',
    'build',
    '.cache',
    'config/eslint',
    'storybook-static',
    '.eslintrc.cjs',
    'vite.config.ts',
    '.storybook',
    'test',
    'jest.config.ts',
    '*.d.ts',
    '.env',
    '.env.*',
    '*.log',
    'public/',
    'static/',
    '.vscode/',
    '.idea/',
    '*.min.js',
    '*.css',
    '*.scss',
    '*.less',
    '*.svg',
    '*.png',
    '*.jpg',
    '*.jpeg',
    '*.gif',
    '*.ico',
    'tmp/',
    'temp/',
    'out/',
    '*.tmp',
    '*.temp',
    '*.iml',
    '.DS_Store',
    'coverage/',
    'reports/',
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint', 'import', 'boundaries'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/include': ['src/**/*'],
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'app',
      },
      {
        type: 'pages',
        pattern: 'src/pages/*',
        capture: ['page'],
      },
      {
        type: 'widgets',
        pattern: 'widgets/*',
        capture: ['widget'],
      },
      {
        type: 'features',
        pattern: 'features/*',
        capture: ['feature'],
      },
      {
        type: 'entities',
        pattern: 'entities/*',
        capture: ['entity'],
      },
      {
        type: 'shared',
        pattern: 'shared/*',
        capture: ['segment'],
      },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  rules: {
    ...customRules,
  },
};
