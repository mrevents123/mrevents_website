import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    cors: true,
    allowedHosts: ["all","devserver-master--adorable-pie-3a8589.netlify.app"],
    hmr: {
      clientPort: 443,       // dev tunnel uses HTTPS (port 443)
      protocol: "wss",       // secure websocket for tunnel
    },
  },
});
