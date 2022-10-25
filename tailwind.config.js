/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'logo': ['MedievalSharp', 'cursive'],
      'body': ['Poppins', 'sans-serif']
    },
    backgroundImage: {
      'hero': "url(./images/Home.jpg)",
      'hero-mobile': "linear-gradient(to left, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.2)), url(./images/Home.jpg)",
      'skills': "url(./images/Skills.jpg)"
    },
    plugins: [],
  }
}
