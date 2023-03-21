/** @type {import('tailwindcss').Config} */

const fontSize = {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
};

// you can define your spacing here
const sizes = {
  base: '0.3125rem',
  smallest: '0.625rem',
  smaller: '1.25rem',
  small: '1.875rem',
  medium: '2.5rem',
  large: '3.125rem',
  larger: '3.75rem',
  largest: '4.375rem',
};

const screens = {
  'sm': '480px',
  'md': '768px',
  'lg': '976px',
  'xl': '1440px',
  // add new break point like this
  '3xl': '1600px',
};

const colors = {
  // Here you can define primary colors
  'primary-blue': '#5F46F8',
  'primary-cyan': '#00D4C8',
  'secondary-blue': '#0C77F5',
  'secondary-purple': '#6764FC',
  'secondary-cyan': '#B1E3E2',
  'gray': {
    // Here you can define the different gray shades
    100: '#f7fafc',
    900: '#1a202c',
  },
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Here you can define your break points.
      screens,
      colors,
      margin: sizes,
      spacing: sizes,
      padding: sizes,
      fontSize, // Optional (Subject to change)
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        // add background image here. eg:
        // 'hero-pattern': "url('#')",
        // 'footer-texture': "url(#')",
      },
    },
  },
};
