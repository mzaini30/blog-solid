import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
