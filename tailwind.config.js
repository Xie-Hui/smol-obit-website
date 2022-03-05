const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        //sans: ['Cairo', ...defaultTheme.fontFamily.sans],
        //sans: ['Quantico', ...defaultTheme.fontFamily.sans],
        //mono: ['Nokia Cellphone FC', ...defaultTheme.fontFamily.mono],
        mono: ["Press Start\\ 2P", ...defaultTheme.fontFamily.sans],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        xl: "3px 3px 0px rgba(10, 10, 10, 1)",
        "2xl": "3px 3px 0px rgba(65, 65, 65, 1)",
        "3xl": "5px 5px 0px rgba(65, 65, 65, 1)",
      },
      boxShadow: {
        button:
          "-4px 0 0 0 #444, 4px 0 0 0 #444, 0 -4px 0 0 #444, 0 4px 0 0 #444, inset -3px 0 0 0 #999, inset 0 -3px 0 0 #999",
        "button-hover":
          "-4px 0 0 0 #444, 4px 0 0 0 #444, 0 -4px 0 0 #444, 0 4px 0 0 #444, inset -5px 0 0 0 #999, inset 0 -5px 0 0 #999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
}
