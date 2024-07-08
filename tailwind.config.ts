import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '.65rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
