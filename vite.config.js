import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/tierheim-webseite/", // GitHub Pages benötigt den Repository-Namen hier
});
