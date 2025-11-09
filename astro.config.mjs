// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mandocodes1.github.io',
  // Comment out base path for local development
  // Uncomment when deploying to GitHub Pages
  // base: '/Dr-Eugenia-Vila',
  trailingSlash: 'always',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ]
});