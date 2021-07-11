/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      // fontFamily: {
      //   poppins: ['Quicksand', 'Poppins', 'system-ui'],
      // },

      colors: {
        primary: colors.orange,
        'primary-2': 'var(--primary-2)',
        secondary: colors.blueGray,
        'secondary-2': 'var(--secondary-2)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('postcss-focus-visible'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
