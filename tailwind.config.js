/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050806',
          secondary: '#0C1210',
        },
        surface: {
          DEFAULT: '#131A17',
          elevated: '#18211D',
        },
        accent: {
          primary: '#2F6B4F',
          secondary: '#5EA87B',
          highlight: '#8CC6A0',
        },
        txt: {
          primary: '#F4F6F5',
          secondary: '#A2ADA6',
          muted: '#7E8882',
        },
        borderCustom: 'rgba(120,150,130,0.12)',
        dividerCustom: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'SF Pro', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
