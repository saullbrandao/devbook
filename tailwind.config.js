module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
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
          paper: {
            DEFAULT: 'rgba(255, 255, 255, 0.25)',
            dark: 'rgba(255, 255, 255, 0.15)',
          }
        },
        gray: {
          light: '#c4c4c4',
          DEFAULT: '#646469',
          dark: '#656565'
        },
        black: {
          light: '#00030f',
          DEFAULT: '#000'
        },
        purple: {
          light: '#DCDAF6'
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
