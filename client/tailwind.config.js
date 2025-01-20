/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      xs: '480px',
      sm: '640px',
      md: '990px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1600px',
      huge: '2000px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({});
    },
  ],
};
