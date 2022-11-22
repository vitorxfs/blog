const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@common(.*)$': '<rootDir>/src/common$1',
    '^@infra(.*)$': '<rootDir>/src/infrastructure$1'
  },
  testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
