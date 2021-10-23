const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    'src/pages/*.astro',
    'src/components/*.astro',
    'src/layouts/*.astro',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...default_theme.fontFamily.sans],
      block: ['Bungee'],
      marker: ['Permanent Marker'],
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
