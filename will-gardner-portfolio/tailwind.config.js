module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'karla': ['Karla'],
    },
    extend: {
      width: {
        '95vw': '95vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
