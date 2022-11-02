import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: '127.0.0.1', port: 3000 },
  build: { minify: true },
  root: '',
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
