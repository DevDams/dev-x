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
          default: '#0F0F0F',
        },
        myblue: {
          default: '#5874dc',
        },
        mygreen: {
          default: '#238c89',
        },
        myfadegreen: {
          default: '#d4f1ef',
        },
        myviolet: {
          default: '#7a6cce',
        },
        mywhite: {
          default: '#e7e7e7',
        },
        mypink: {
          default: '#ff74aa',
        },
        myorange: {
          default: '#fa9284',
        }
      }
    },
    screens: {
      'xs':  {'max' : '639px'}, // <<=== my custom breakpoint
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
  container: {
    padding: {
      DEFAULT: '2rem',
      xs: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
  },
  variants: {},
  plugins: [],
}
