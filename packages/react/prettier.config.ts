module.exports = {
  ...require("../../prettier.config.js"),
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
};
