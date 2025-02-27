import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tierheim-webseite/', // Dies bleibt gleich für GitHub Pages
  build: {
    outDir: './', // Build in root directory
    emptyOutDir: false // Verhindert, dass Vite deine Quelldateien löscht
  },
});