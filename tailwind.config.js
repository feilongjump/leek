module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
      margin: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
