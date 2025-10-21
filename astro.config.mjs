import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  site: 'https://hirotomo-stock-blog-qni0f7by1-hsasaki12s-projects.vercel.app',
});
