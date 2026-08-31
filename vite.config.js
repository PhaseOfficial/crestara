import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.JPG', '**/*.jpg', '**/*.jpeg'],
  base: '/', // Configured for standard cPanel root domain (public_html) deployment
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  }
});

