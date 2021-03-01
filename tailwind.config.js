module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    require('tailwindcss-dark-mode')()
  ],
  theme: {
    extend: {
      colors: {
        darkMode: {
          default: '#262626'
        },
        lightMode: {
          default: '#f2a490'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
