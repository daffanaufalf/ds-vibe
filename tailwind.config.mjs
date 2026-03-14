/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./apps/storybook/**/*.{ts,tsx,mdx}",
    "./packages/components/src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // Tokens will be added here in Phase 1
    },
  },
  plugins: [],
};
