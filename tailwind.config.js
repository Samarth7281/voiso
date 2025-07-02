/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand1: '#FF2F80',
        brand2: '#007BFF', // adjust to match your brand
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FF2F80 10%, #007BFF 100%)',
      },
    },
  },
  plugins: [],
};
