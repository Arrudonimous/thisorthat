/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        base: 'linear-gradient(180deg, #319686 0%, #155053 50%, rgba(1, 32, 48, 0.92) 100%)',
        'gradient-container': 'url(/src/assets/Gradient.png)',
        firstOption: 'linear-gradient(180deg, #13678A 0%, rgba(19, 103, 138, 0.85) 100%);',
        secondOption: 'linear-gradient(180deg, #012030 0%, rgba(1, 32, 48, 0.85) 100%);',
      },
      colors: {
        text: '#DAFDBA',
        main: '#13678A',
        secondary: '#012030',
        light: '#45C4B0',
      },
      fontFamily: {
        sans: 'Nunito sans',
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
};
