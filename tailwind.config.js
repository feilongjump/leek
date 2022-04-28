const scrollbar = require('@gradin/tailwindcss-scrollbar')

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
  plugins: [scrollbar]
}
