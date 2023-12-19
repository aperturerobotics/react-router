module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/*-test.[jt]s?(x)"],
  transform: {
    "\\.[jt]sx?$": "./jest-transformer.js",
  },
  globals: {
    __DEV__: true,
  },
  setupFiles: ["./__tests__/setup.ts"],
  moduleNameMapper: {
    "^@aptre/remix-router$": require.resolve("@aptre/remix-router"),
    "^@remix-run/web-blob$": require.resolve("@remix-run/web-blob"),
    "^@remix-run/web-fetch$": require.resolve("@remix-run/web-fetch"),
    "^@remix-run/web-form-data$": require.resolve("@remix-run/web-form-data"),
    "^@remix-run/web-stream$": require.resolve("@remix-run/web-stream"),
    "^@web3-storage/multipart-parser$": require.resolve(
      "@web3-storage/multipart-parser",
    ),
    "^@aptre/remix-react-router$": "<rootDir>/index.ts",
  },
};
