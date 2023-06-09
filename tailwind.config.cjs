/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'bleuColors':'#2a68ff',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textColor':'#252b36'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
