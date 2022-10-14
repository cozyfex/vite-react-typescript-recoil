import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@public': '/public',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@states': '/src/states',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@interfaces': '/src/interfaces',
      '@components': '/src/components',
    },
  },
});
