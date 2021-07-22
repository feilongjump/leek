module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#040d21'
      },
      minWidth: {
        80: '20rem'
      },
      skew: {
        30: '30deg'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
