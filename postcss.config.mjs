/**
 * PostCSS Configuration
 * @type {import('postcss-load-config').Config}
 *
 * This file configures the PostCSS processor which transforms CSS with JavaScript plugins.
 * It's used in the build process to process CSS files before they're served to the browser.
 */
const config = {
  plugins: {
    // Add Tailwind CSS v4 support
    '@tailwindcss/postcss': {},
    // Add autoprefixer for better browser compatibility
    'autoprefixer': {},
  },
};

export default config;
