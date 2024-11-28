import type { Config } from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/*-test.(js|ts)"],
  setupFiles: ["./__tests__/setup.ts"],
  moduleNameMapper: {
    "^@aptre/remix-router$": "<rootDir>/index.ts",
    "^@remix-run/web-blob$": require.resolve("@remix-run/web-blob"),
    "^@remix-run/web-fetch$": require.resolve("@remix-run/web-fetch"),
    "^@remix-run/web-form-data$": require.resolve("@remix-run/web-form-data"),
    "^@remix-run/web-stream$": require.resolve("@remix-run/web-stream"),
    "^@web3-storage/multipart-parser$": require.resolve(
      "@web3-storage/multipart-parser"
    ),
  },
};

export default config;
