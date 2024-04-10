module.exports = {
  testEnvironment: "jsdom",

 
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",

  // Indicates whether to use the transform module to preprocess files
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Use Babel to transform JavaScript and JSX files
  },

  // Indicates the paths to the modules that run some code to configure or set up the testing environment before each test

  // Indicates whether to collect coverage information while executing the test

  // Indicates the directories where Jest should look for coverage information
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
