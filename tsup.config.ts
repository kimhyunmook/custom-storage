import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"], // 또는 src/index.ts
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom"],
  clean: true,
});
