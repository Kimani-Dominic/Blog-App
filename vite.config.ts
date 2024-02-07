// Jadili-react/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Ensure this matches your Django port
    },
  },
});
