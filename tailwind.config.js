module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#040d21'
      },
      skew: {
        30: '30deg'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
