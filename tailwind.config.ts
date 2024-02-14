import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'side-bar': '#2D343F',
        container: '#F6F6F6',
        dropdown: '#053C38',
        navyblue: '#1B2559',
        lightgray: '#F4F7FE',
        grayshade: '#718096',
        dimgray: '#ECECEC',
        darkgrayshade: '#C9C8C8',
        heavygray: '#CACACA',
      },
      borderRadius: {
        '45': '45px',
        '15': '15px',
        '49': '49px',
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '5/10': '50%',
        '9/10': '90%',
        '600': '600px',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '5/10': '50%',
        '9/10': '90%',
      },
      maxHeight: {
        '600': '600px',
        '200': '200px',
        '400': '400px',
        '300': '300px',
      },
      minHeight: {
        '460': '460px',
        '200': '200px',
        '400': '400px',
      },
      minWidth: {
        '200': '200px',
        '150': '150px',
        '100': '100px',
      },
      maxWidth: {
        '200': '200px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
