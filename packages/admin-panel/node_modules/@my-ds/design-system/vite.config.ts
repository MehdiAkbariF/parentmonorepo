import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";


export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyDS",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  },
  resolve: {
      alias: {
    styles: path.resolve(__dirname, "src/styles")
  }
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "src")]
      }
    }
  }
});
