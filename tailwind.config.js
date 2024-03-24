/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/stories/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      primary: '#264653',
      secondary: '#2a9d8f',
      accent: '#e9c46a'
    },
    extend: {},
  },
  plugins: [],
}
