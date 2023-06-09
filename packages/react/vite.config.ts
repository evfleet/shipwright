import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "Decor",
			formats: ["es", "umd"],
			fileName: (format) => `decor.${format}.js`,
		},
		rollupOptions: {
			external: ["react"],
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./test/setup.ts",
	},
});
