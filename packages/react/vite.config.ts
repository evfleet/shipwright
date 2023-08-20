import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

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
});
