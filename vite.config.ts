import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This will be replaced with your actual repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
