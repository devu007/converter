module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./setUpTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
