module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersBydefault: true,
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
        },
        // => My custom color
        myblack: {
          default: '#384e78',
        },
        myblue: {
          default: '#5874dc',
        },
        mygreen: {
          default: '#6aab9c',
        },
        mypink: {
          default: '#e06c78',
        },
        myorange: {
          default: '#fa9284',
        }
      }
    },
    screens: {
      'xs':  {'max' : '639px'},
      // => @media (max-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {},
  plugins: [],
}
