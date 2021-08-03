module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  projects: ['<rootDir>', '<rootDir>/packages/*'],
  // globals: {
  //   __DEV__: true,
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.json',
  //   },
  // },
  // verbose: true,
  // modulePaths: ['<rootDir>/'],
  // transformIgnorePatterns: ['node_modules/(?!(react-use)/)'],

  // transform: {
  //   '^.+\\.(?:js|ts)x?$': 'ts-jest',
  // },
  moduleNameMapper: {
    '^@nicolaz/(.*)$': '<rootDir>/packages/$1'
  },
};