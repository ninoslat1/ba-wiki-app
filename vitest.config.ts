import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "**/node_modules/**",
      "**/fixtures/**",
      "**/templates/**",
    ],
    globals: true,
    environment: "jsdom",
    setupFiles: "./app/tests/setup.ts", // Optional if you need global setup
  },
  plugins: [tsconfigPaths()],
});
