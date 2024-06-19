import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: parseInt((import.meta as any).env.VITE_REACT_PORT),
    port: 8000,
  },
});
