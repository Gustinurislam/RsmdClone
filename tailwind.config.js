/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
  
        'md': '375px',
  
        'lg': '425px',
  
        'xl': '768px',
  
        '2xl': '1024px',
      },
      colors: {
        'primary': '#2CB4AC'
      }
    },
  },
  plugins: [],
}