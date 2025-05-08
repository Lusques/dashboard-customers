/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|mjs|html|js)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.spec.json",
        stringifyContentPathRegex: "\\.html$",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  extensionsToTreatAsEsm: [".ts"],
};
