// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Configuración de internacionalización
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // SEO y Sitemap
  site: 'https://oncogorro.com',
  trailingSlash: 'ignore',
  
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),

  // Compresión y optimización
  compressHTML: true,
  
  // Configuración de build
  build: {
    inlineStylesheets: 'auto',
  },

  // Configuración de output
  output: 'static',
});