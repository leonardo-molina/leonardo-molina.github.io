/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        surface: {
          0: '#000000',
          50: '#09090B',
          100: '#121215',
          200: '#1C1C21',
          300: '#27272A',
          400: '#3F3F46',
          500: '#71717A',
          600: '#A1A1AA',
          700: '#D4D4D8',
          800: '#E4E4E7',
          900: '#FAFAFA',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
