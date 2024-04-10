module.exports = {
  testEnvironment: "jsdom",

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
