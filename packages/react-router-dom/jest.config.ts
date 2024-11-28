import type { Config } from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/*-test.[jt]s?(x)"],
  globals: {
    __DEV__: true,
  },
  setupFiles: ["./__tests__/setup.ts"],
  moduleNameMapper: {
    "^@aptre/remix-router$": "<rootDir>/../router/index.ts",
    "^@remix-run/web-blob$": require.resolve("@remix-run/web-blob"),
    "^@remix-run/web-fetch$": require.resolve("@remix-run/web-fetch"),
    "^@remix-run/web-form-data$": require.resolve("@remix-run/web-form-data"),
    "^@remix-run/web-stream$": require.resolve("@remix-run/web-stream"),
    "^@web3-storage/multipart-parser$": require.resolve(
      "@web3-storage/multipart-parser"
    ),
    "^@aptre/remix-react-router$": "<rootDir>/../react-router/index.ts",
    "^@aptre/remix-react-router-dom$": "<rootDir>/index.tsx",
  },
};

export default config;
