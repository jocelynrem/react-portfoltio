const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.sky,
      gray: colors.warmGray,
      white: colors.white,
      black: colors.black,
      'rem-blue': '#6c778b',
      'rem-tan': '#ead8cc',
      'rem-pink': '#eba2ad',
      'rem-teal': '#a1c2b9',
      'rem-gray': '#eeeae9',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [ require('@tailwindcss/forms')],
}
