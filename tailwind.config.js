module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }


      '900': '900px',
      // => @media (min-width: 900px) { ... }


      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '1100': '1100px',
      '1101': '1101px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '1.5xl': '1400px',
      // => @media (min-width: 1400px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}