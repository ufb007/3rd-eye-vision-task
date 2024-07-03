/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,html}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#29293D',
        'primary': '#0172B1',
        'secondary': '#019EF5',
        'blue': '#E6F1F8'
      },
      fontFamily: {
        'AG-Bold': ['AktivGrotesk-Bold', 'sans-serif'],
        'AG-Regular': ['AktivGrotesk-Regular', 'sans-serif'],
        'Haikus-Bold': ['HaikusScriptv09Bold', 'sans-serif'],
        'Haikus-Regular': ['HaikusScriptv09Regular', 'sans-serif'],
        'DD-Bold': ['domaine-display-bold', 'sans-serif'],
        'DD-Regular': ['domaine-display-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

