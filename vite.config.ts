import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@store': '/src/stores',
      '@layouts': '/src/layouts',
      '@interfaces': '/src/interfaces',
      '@components': '/src/components',
    },
  },
});
