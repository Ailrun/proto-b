const babelConfig = require('../babel/babelrc')({
  isProduction: false,
});

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.{ts,tsx}',
  ],

  globals: {
    'ts-jest': {
      babelConfig,
      tsConfigFile: './config/tsconfig/tsconfig.test.json',
    },
  },

  moduleFileExtensions: [
    'tsx', 'ts',
    'jsx', 'js',
    'json',
  ],
  moduleNameMapper: {
    '~src(.*)$': '<rootDir>/src$1',
    '~test(.*)$': '<rootDir>/test$1',
  },

  rootDir: '../../',
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
  ],

  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setupTest.ts',

  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/test/**/*.test.ts?(x)',
    '<rootDir>/test/**/*.test.js?(x)',
  ],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
