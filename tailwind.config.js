/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'neutralSilver': '#F5F7FA',
      'neutralDGrey': '#4D4D4D',
      'brandPrimary': '#2ebbd9',
      'neutralGrey': '#717171',
      'gray900': '#18191F',

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
