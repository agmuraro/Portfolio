/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        midnight: "#0f1115",
        surface: "#1e2329",
        border: "#2f343b",
        accent: "#00ff88",
        accentDark: "#22c55e",
        accentLight: "#bbf7d0"
      },
    },
  plugins: [],
}};
