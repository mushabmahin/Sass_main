 // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom primary color palette
        primary: {
          '50': '#eff0ff',
          '100': '#e0e1ff',
          '200': '#c2c3ff',
          '300': '#a3a6ff',
          '400': '#8588ff',
          '500': '#666bff',
          '600': '#4f46e5', // Your brand color
          '700': '#392ea8',
          '800': '#261f6e',
          '900': '#130f37',
          '950': '#0d0a27',
        },
      },
    },
  },
  plugins: [],
}