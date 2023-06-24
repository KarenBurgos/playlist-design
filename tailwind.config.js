/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "bg-light":"#303443",
      'border-gray': '#D3D3D3',
      'pink': '#CC89D2',
      'pink-light': '#FBCCFF',
      'pink-dark': '#B968C0',
      'purple': '#9C8AFA',
      'purple-light': '#C9C1F5',
      'white': '#FFFFFF',
      'orange': '#FFDDD2',
      'orange-light':'#FFF2F2',
      'orange-dark':'#FFBCA7',
      'red':'#910A0A',
    }
  },
  plugins: [],
}

