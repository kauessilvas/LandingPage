/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/header.png')",
      },
      colors: {
        'amber': '#E58411',
        'sapphire': '#0D1B39',
        'obsidian': '#1E1E1E',
        'frost': '#F7F7F7',
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'max': '1023px'},
        'lg': {'max': '1279px'},
        'xl': {'max': '1535px'},
        '2xl': {'max': '1536px'},
      },
    },
  },
  plugins: [],
}
