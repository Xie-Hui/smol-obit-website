const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        //sans: ['Cairo', ...defaultTheme.fontFamily.sans],
        //sans: ['Quantico', ...defaultTheme.fontFamily.sans],
        //mono: ['Nokia Cellphone FC', ...defaultTheme.fontFamily.mono],
        sans: ['Press Start\\ 2P', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
