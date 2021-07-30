const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
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
    // base: '1rem',
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
        surface: {
          DEFAULT: 'var(--color-bg-primary)',
          100: 'var(--color-bg-secondary)',
          200: 'var(--color-bg-tertiary)',
        },
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        accent: {
          DEFAULT: 'var(--color-text-accent)',
          light: 'var(--color-text-accent-light)',
          dark: 'var(--color-text-accent-dark)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover, &.active': {
                color: 'colors.accent.light',
                strong: {
                  color: 'white',
                },
              },
            },
            h1: {
              color: theme('colors.primary'),
            },
            h2: {
              color: theme('colors.secondary'),
            },
            h3: {
              color: theme('colors.primary'),
            },
            h4: {
              color: theme('colors.primary'),
            },
            code: {
              color: 'white',
              'background-color': theme('colors.primary'),
              '&:before, &:after': {
                display: 'none',
              },
            },
            p: {
              color: theme('colors.primary'),
            },
            img: {},
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.primary'),
              },
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.primary'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.primary'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: theme('colors.accent.light'),
              },
            },
            h1: {
              color: theme('colors.primary'),
            },
            h2: {
              color: theme('colors.primary'),
            },
            h3: {
              color: theme('colors.primary'),
            },
            h4: {
              color: theme('colors.primary'),
            },
            code: {
              color: theme('colors.primary'),
              '&:before, &:after': {
                display: 'none',
              },
            },
            p: {
              color: theme('colors.primary'),
            },
            img: {},
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.primary'),
              },
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.primary'),
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
