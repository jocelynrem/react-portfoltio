const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.sky,
      gray: colors.stone,
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
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
