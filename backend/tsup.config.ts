import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["app/server.ts"],
  outDir: "build",
  format: ["cjs"],
  target: "node22",
  bundle: true,
  sourcemap: false,
  clean: true,
  minify: true,
  splitting: true,
  treeshake: true,
  dts: false,
  external: [],
});
