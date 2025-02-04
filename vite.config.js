import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // thư mục build
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    minify: "esbuild", // Sử dụng esbuild để minify
    sourcemap: true, // có thể tắt ở production nếu không cần thiết
  },
  server: {
    open: true, // tự động mở trình duyệt khi chạy dev server
  },
});
