module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#6C80EA',
        secondary: '#A7A5EC',
        background: {

          paper: 'rgba(255, 255, 255, 0.25)',
        },
        gray: {
          light: '#c4c4c4',
          DEFAULT: '#646469',
          dark: '#656565'
        },
        black: {
          light: '#00030f',
          DEFAULT: '#000'
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
