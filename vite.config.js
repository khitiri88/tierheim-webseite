import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/tierheim-webseite/",
  build: {
    outDir: "dist"
  }
});
