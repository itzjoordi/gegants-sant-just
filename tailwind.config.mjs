/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      ink: "#1d1d1f",
      muted: "#6e6e73",
      subtle: "#86868b",
      line: "#d2d2d7",
      canvas: "#fbfbfd",
      mist: "#f5f5f7",
      blue: "#232A55",
      link: "#2f5bd3",
      yellow: "#F4C637",
      gold: "#bf8a0a",
    },
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
};
