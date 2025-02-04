import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Đảm bảo thư mục build là 'dist', mặc định của Vercel
    rollupOptions: {
      output: {
        // Đảm bảo tên file sau khi build không bị trùng
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  optimizeDeps: {
    include: ["@babel/runtime"],
  },
  server: {
    open: true, // Tự động mở trình duyệt khi chạy dev server
  },
});
