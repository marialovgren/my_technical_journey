/** @type {import('tailwindcss').Config} */
module.exports = {
    content:["./public/**/*.html","./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          lightBeige: '#F5EFED',
          lightOrange: '#EFBEA5',
          orange: '#F18D6D',
          brown: '#A85B48',
          blue: '#173A52',
          lightGreen: '#BFCECE'
        },
        fontFamily: {
          regular: ['Roboto', 'arial', 'sans-serif'],
        },
      },
    },
  }
  