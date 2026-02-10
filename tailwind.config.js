/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delay': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.1 },
        }
      }
    },
  },
  plugins: [],
}
