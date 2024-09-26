/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        sms: '360px',
        md: '375px',
        mds: '390px',
        mdm: '414px',
        lg: '425px',
        xl: '768px',
        xls: '800px',
        xlm: '820px',
        xll: '834px',
        '2xl': '1024px',
      },
      colors: {
        primary: '#2CB4AC',
      },
    },
  },
  plugins: [],
};
