import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  
  plugins: [react()],
  base: "", // NICHT "/tierheim-webseite/" für lokalen Betrieb!
});

