const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    // },
    fontFamily: {
      sans: ['Soehne', 'system-ui', 'sans-serif'],
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-10': '-10deg',
      '-9': '-9deg',
      '-8': '-8deg',
      '-7': '-7deg',
      '-6': '-6deg',
      '-5': '-5deg',
      '-4': '-4deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      4: '4deg',
      5: '5deg',
      6: '6deg',
      7: '7deg',
      8: '8deg',
      9: '9deg',
      10: '10deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    extend: {
      colors: {
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.800'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover, &.active': {
                color: 'white',
                strong: {
                  color: 'white',
                },
              },
            },
            h1: {
              color: theme('colors.grey.800'),
            },
            h2: {
              color: theme('colors.grey.800'),
            },
            h3: {
              color: theme('colors.grey.800'),
            },
            h4: {
              color: theme('colors.grey.800'),
            },
            code: {
              color: 'white',
              'background-color': theme('colors.grey.800'),
              '&:before, &:after': {
                display: 'none',
              },
            },
            p: {
              color: theme('colors.grey.800'),
            },
            img: {},
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.grey.800'),
              },
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.grey.800'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: theme('colors.gray.200'),
              },
            },
            h1: {
              color: theme('colors.gray.200'),
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
              '&:before, &:after': {
                display: 'none',
              },
            },
            p: {
              color: theme('colors.gray.200'),
            },
            img: {},
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.gray.200'),
              },
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.gray.200'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
