/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'verde-suave': '#B3BCAF',
        'verde-medio': '#91A582',
        'verde-oscuro': '#384032',
        blanco: '#FFFFFF',
        arena: '#EDE9E5',
      },
      fontFamily: {
        windsong: ['Windsong', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
