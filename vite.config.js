import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @ points to src folder
    },
  },
  base: command === "build" ? "/Portfolio/" : "/", // dev ke liye "/", build ke liye repo name
}));
