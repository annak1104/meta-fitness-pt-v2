import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build',
    assetsDir: '.',
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash].[ext]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js',
      }
    }
  }
});
