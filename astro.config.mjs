// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL de production — utilisée pour les canonical / hreflang (SEO).
  site: 'https://mosquee-epernay.fr',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
