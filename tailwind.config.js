/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      colors: {
        brand: '#7DD4D4',
        bgPrimary: '#000000',
        bgSurface: '#0f0f0f',
        bgCard: '#141414',
        textPrimary: '#FFFFFF',
        textMuted: '#8899B0',
      },
      animation: {
        marquee: 'marquee 6s linear infinite',
        slide: 'marquee 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}
