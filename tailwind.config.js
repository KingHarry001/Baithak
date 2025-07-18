/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    },
  },
  plugins: [require("daisyui")],
    daisyui: {
    themes: [
      // your custom light theme
      {
        customlight: {
          "primary": "#4f46e5",     // example: indigo
          "secondary": "#fbbf24",   // example: amber
          "accent": "#10b981",      // example: emerald
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
      },
      // built‑in dark theme (you can customize this too)
      "dark",
    ],
  },
}

