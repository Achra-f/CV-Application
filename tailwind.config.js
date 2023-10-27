/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate300: "#cbd5e1",
        grayBlue: '#1e1c27',
        greenBlue: '#5ce1e6',
      },
    },
  },
  plugins: [],
};
