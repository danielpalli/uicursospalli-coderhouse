/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'sm': {'min': '280px', 'max': '605px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '606px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      'mdUp': {'min': '768px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
