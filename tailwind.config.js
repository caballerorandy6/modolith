/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)", "sans-serif"],
        caveatbrush: ["var(--font-caveatbrush)", "sans-serif"],
      },
      colors: {
        bluezodiac: "#0C1C3C",
        mongoose: "#BEA47E",
        rollingstone: "#7A858B",
      },
    },
  },
  plugins: [],
};
