import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          '50': '#f4f5fa',
          '100': '#e5e6f4',
          '200': '#d1d4ec',
          '300': '#b2b8de',
          '400': '#8d95cd',
          '500': '#7175c0',
          '600': '#605fb1',
          '700': '#5853a2',
          '800': '#4e4885',
          '900': '#3c3963',
          '950': '#2b2942',
        },
        secondary: {
          '50': '#f7f6fc',
          '100': '#f1eef9',
          '200': '#e4e0f4',
          '300': '#d0c6ec',
          '400': '#b7a5e0',
          '500': '#9575cd',
          '600': '#8c65c2',
          '700': '#7b52af',
          '800': '#674592',
          '900': '#563a78',
          '950': '#372451',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
