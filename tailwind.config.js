/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-light': '#1EA4CE',
        'blue-dark': '#147594',
        'lighter-grey': '#FAFAFA',
        'light-grey': '#E5E5E5',
        'dark-grey': '#6F6F6F',
        'blueish-dark-grey': '#697488'
      },
      fontSize: {
        '13px': '13px',
        '14px': '14px',
        '20px': '20px'
      },
      height: {
        '40px': '40px'
      }
    },

  },
  plugins: [],
}
