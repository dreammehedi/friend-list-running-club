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
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      backgroundImage:{
        banner: 'url(../images/4.jpg)'
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
      
      boxShadow:{
        shadow1: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        shadow2: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      }
    },
  },
  plugins: [],
}
