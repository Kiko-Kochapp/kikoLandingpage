// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stjpaa.github.io',
  base: '/kikoLandingpage',
  vite: {
    plugins: [tailwindcss()]
  }
});