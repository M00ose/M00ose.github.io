/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(calc(-4vw * 6.5))'}, 
        },
        scrollSM: {
          '0%, 100%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(calc(-8vw * 6.5))'}, 
        }
      },
      colors: {
        primary: "#EDEADE",
        secondary: "#878749",
        tertiary: "#BABA9C",
        "off-black": "#2e2e19",
        "off-grey": "#6f6f61",
        "off-white": "#e8e8d4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "576px",
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
    },
  },
  plugins: [],
};