/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        jump: 'jump 1s infinite cubic-bezier(0.6, 0.05, 0.28, 0.9)',
      },
    },
  },
  plugins: [],
}

