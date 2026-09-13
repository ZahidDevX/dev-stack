import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@types": path.resolve(__dirname, 'src/types'),
      "@": path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
});
