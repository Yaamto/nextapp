/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dmode': '#242424',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'header' : 'linear-gradient(52.36deg, rgba(0, 0, 0, 1) 2.64%, rgba(85, 85, 85, 1) 101.88%);',
          'dwave': 'url("/public/dwave.svg")',
          'wave': 'url("/public/wave.svg")'
      },
      backgroundColor: {
        'dmode': '#242424',
      }
    },
  },
  plugins: [],
}
