module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // 타입스크립트 추천 룰셋
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022, // 최신 문법 지원
    sourceType: "module", // 모듈 시스템 사용시
  },
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto", tabWidth: 4 }],
  },
  settings: {},
};