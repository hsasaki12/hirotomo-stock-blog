import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://hirotomo-stock-blog-qni0f7by1-hsasaki12s-projects.vercel.app'
});
