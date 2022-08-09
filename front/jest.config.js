module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass|module.scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/*/*.stories.{ts,tsx}',
    '!**/mocks/*.{ts,tsx}',
    '!**/mockData/*.{ts,tsx}',
    '!**/*/*.story.{ts,tsx}',
    '!**/*/FormCommonProps.tsx',
    '!**/*/*.types.{ts,tsx}',
    '!**/*/*.constants.{ts,tsx}',
    '!**/*/*.config.{ts,tsx}',
    '!**/*/index.ts',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/storybook-static/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
