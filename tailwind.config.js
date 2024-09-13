/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-background': "url('./assets/imgs/darkImg.jpg')",
      }
    },
  },
  plugins: [],
}