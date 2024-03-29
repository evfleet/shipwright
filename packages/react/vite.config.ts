import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "shipwright",
      fileName: (format) => `shipwright.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
  },
});
