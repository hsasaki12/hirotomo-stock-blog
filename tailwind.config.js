/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Hiragino Sans',
          'Noto Sans JP',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
