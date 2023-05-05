/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const fontSize = {
  title: '2.5rem',
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
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' },
      });
    }),
  ],
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize, // Optional (Subject to change)
      backgroundImage: {
        // add background image here. eg:
        // 'hero-pattern': "url('#')",
        // 'footer-texture': "url(#')",
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
};
