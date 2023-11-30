/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/preline/dist/*.js',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  darkMode: 'class',
  prefix: 'rt-',
  presets: [],
  theme: {
    screens: {},
    spacing: {},
    colors: {},
    fontFamily: {},
    extend: {
      screens: {
        '3xl': '1600px',
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('preline/plugin'),
  ],
}

