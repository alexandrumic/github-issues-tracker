module.exports = {
  root: true,
  extends: "@react-native-community",
  globals: {
    __DEV__: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "jsx-quotes": 0
  }
};
