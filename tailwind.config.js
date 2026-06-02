/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0a0a1a', light: '#12122a', card: '#1a1a3a' },
        accent: { purple: '#6366f1', cyan: '#06b6d4', pink: '#8b5cf6' },
      },
    },
  },
  plugins: [],
};
