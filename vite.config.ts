import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  root: "playground",
  plugins: [react(), dts()],
  server: {},
  build: {
    outDir: "../dist-playground", // dist 안 겹치게
    emptyOutDir: true,
  },
});
