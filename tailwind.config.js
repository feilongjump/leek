const scrollbar = require('@gradin/tailwindcss-scrollbar')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        check: "url('/src/assets/check.svg')"
      }
    },
    scrollbar: () => ({
      DEFAULT: {
        size: '0px'
      }
    })
  },
  plugins: [scrollbar, typography]
}
