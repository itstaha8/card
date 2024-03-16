/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'Dark-blue': 'hsl(223, 47%, 23%)',
        'Desaturated-blue': 'hsl(224, 23%, 55%)',
        'Very-paleblue': 'hsl(225, 100%, 98%)',
        'Bright-blue': 'hsl(245, 75%, 52%)',
        'Pale-blue': 'hsl(225, 100%, 94%)',
      }
    },
  },
  plugins: [],
};
