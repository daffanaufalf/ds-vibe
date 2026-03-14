import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "DS-Vibe",
  brandUrl: "https://example.com",
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  // Colors
  colorPrimary: "#3B82F6",
  colorSecondary: "#1E3A5F",

  // UI
  appBg: "#F8FAFC",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E2E8F0",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#0F172A",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#64748B",
  barSelectedColor: "#3B82F6",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#E2E8F0",
  inputTextColor: "#0F172A",
  inputBorderRadius: 4,
});
