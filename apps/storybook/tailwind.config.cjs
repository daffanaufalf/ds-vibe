/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{ts,tsx,mdx}",
    "../../packages/components/src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
