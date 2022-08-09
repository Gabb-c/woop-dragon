/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.dist/', '/.rollup.cache/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|less)$',
    '<rootDir>/dist/',
  ],
  moduleNameMapper: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|ico)$': 'jest-transform-stub',
    '^@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@assets/(.*)': '<rootDir>/src/assets/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!src/**/*.(stories|story).[jt]s?(x)',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
};

module.exports = config;
