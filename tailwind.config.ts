import type { Config } from 'tailwindcss'
const Color = require('color')

// Function to generate shades
const generateShades = (color: string) => {
  const shades = {}
  const baseColor = Color(color)
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  steps.forEach((step) => {
    shades[`${step}`] = baseColor.darken((500 - step) / 1000).hex()
  })

  return shades
}

const colors = {
  green: '#439846', // green
  blue: '#0b2871', // blue
  yellow: '#f9df4b', // yellow
}

const extendedColors = Object.keys(colors).reduce((acc, key) => {
  acc[key] = {
    DEFAULT: colors[key],
    ...generateShades(colors[key]),
  }
  return acc
}, {})

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: extendedColors,
      fontSize: {
        xxs: '.65rem',
      },
      fontFamily: {
        custom: ['Lato Regular', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} as Config
