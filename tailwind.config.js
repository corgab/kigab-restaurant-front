/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#2C2F24',
        hover: '#DBDFD0',
        bg2: '#F9F9F7',
        gray: '#474747',
        footer: '#ADB29E',
      },
    },
  },
  plugins: [],
};
