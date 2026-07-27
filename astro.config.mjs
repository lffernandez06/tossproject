// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lffernandez06.github.io',
  base: '/tossproject',
  vite: {
    plugins: [tailwindcss()]
  }
});