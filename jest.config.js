const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Archivos en __tests__
    "**/?(*.)+(spec|test).[tj]s?(x)" // Archivos que terminan en .spec o .test
  ],
};

module.exports = createJestConfig(customJestConfig);