import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures all assets are loaded from the root
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});