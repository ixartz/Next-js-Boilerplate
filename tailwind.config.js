// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        'primary-2': 'var(--primary-2)',
        secondary: colors.gray,
        'secondary-2': 'var(--secondary-2)',
        dark: {
          100: '#6d706f',
          200: '#20c991',
          300: '#ff1f4f',
          400: '#dae0de',
          500: '#ffffff',
        },
        light: {
          100: '#ffffff',
          200: '#6c0082',
          300: '#ffffff',
          400: '#000000',
          500: '#ffffff',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
