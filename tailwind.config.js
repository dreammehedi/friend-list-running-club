/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
    },
    fontFamily:{
      alatsi: ['Alatsi', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    container:{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    spacing: {
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      "7": '35px',
      "8": '40px',
      "9": '45px',
      "10": '50px',
      sm: '10px',
      md: '20px',
      lg: '30px',
      xl: '40px'
    },
    colors: {
      'primary': '#F26F43',
      'black': '#111111',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
