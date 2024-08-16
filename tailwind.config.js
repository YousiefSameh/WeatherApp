/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'bgColor': "#f0f8ff",
        'borderColor': "#707070",
      },
    },
    width: {
      'cardWidth': '580px',
      'imgWidth': '270px',
      'inputWidth': '855px',
      'full': '100%',
      'detailWidthIMG': '50px',
      'detailWidthCard': '33.3333333%',
    }
  },
  plugins: [],
}

