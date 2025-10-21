import { defineConfig } from "vite";
import dns from "node:dns";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// ✅ emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Make localhost resolution consistent
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  server: {
    host: true, // listen on all addresses (0.0.0.0)
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname), // project root
        "C:/Users/princ/OneDrive/Desktop/path", // external path
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
    open: "/", // optional: open browser automatically
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()], // 🔹 removed express here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
