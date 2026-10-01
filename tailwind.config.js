export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00A83B',
          50: '#EAF8EF',
          100: '#D1F0DC',
          200: '#A3E1B9',
          500: '#00B83F',
          600: '#00A83B',
          700: '#007A2B',
          800: '#00611F',
          900: '#0A3A1C',
        },
        accent: {
          DEFAULT: '#FF8A00',
          light: '#FF9700',
          50: '#FFF4E5',
        },
        gold: '#FFB000',
        ink: {
          DEFAULT: '#222222',
          600: '#454A46',
          500: '#5C625E',
        },
        surface: '#F5F8F5',
        line: '#E3E8E4',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(34,34,34,0.04), 0 8px 24px -14px rgba(34,34,34,0.14)',
        lift: '0 2px 6px rgba(34,34,34,0.05), 0 24px 48px -20px rgba(0,97,31,0.28)',
      },
    },
  },
};
