/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#2C2F24',
        hover: '#DBDFD0',
      },
    },
  },
  plugins: [],
};
