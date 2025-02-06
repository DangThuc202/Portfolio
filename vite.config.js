import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Tự động mở trình duyệt khi chạy dev server
    port: 3000, // Đảm bảo chạy trên port 3000 (hoặc đổi nếu cần)
    host: true, // Để có thể truy cập từ mạng LAN nếu cần
  },
});
