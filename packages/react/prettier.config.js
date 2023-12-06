import baseConfig from '../../prettier.config.js';

export default {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  "tailwindFunctions": [
    "cva"
  ]
};
