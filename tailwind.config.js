/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0F1117",
          soft: "#1C1F2E",
          muted: "#6B7280",
        },
        trust: {
          DEFAULT: "#1A56DB",
          light: "#EBF0FD",
          dark: "#1240A8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FC",
          border: "#E5E9F2",
        },
        accent: {
          green: "#059669",
          amber: "#D97706",
          red: "#DC2626",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
