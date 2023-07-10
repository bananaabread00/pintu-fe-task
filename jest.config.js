/* eslint-disable no-undef */
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__test__/',
    '<rootDir>/src/shared/constants/',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/App.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom'
};
