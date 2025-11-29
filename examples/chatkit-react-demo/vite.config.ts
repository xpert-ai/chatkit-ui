import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@xpert-ai/chatkit-react": path.resolve(__dirname, "../../packages/chatkit-react/src"),
    },
  },
  server: {
    port: 5173,
  },
});
