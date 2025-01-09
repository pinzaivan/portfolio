/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
  extend:{
    colors: {
      principal: '#eab308',
      secondary: '#ffffff'
    },
    fontFamily:{
      principal: '"Oswald",_sans-serif'
    }

  }
  },
  plugins: [],
}

