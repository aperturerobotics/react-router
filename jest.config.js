/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  projects: [
    "<rootDir>/packages/*"
  ],
  reporters: [
    "default"
  ],
  testEnvironment: "@bufbuild/jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
