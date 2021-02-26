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
          default: '#f9f9f9'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
