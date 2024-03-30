/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1380px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          700: "#C81E1E",
          800: "#9B1C1C",
        },
        gray: {
          50: "#FAF9FF",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#FBFBFB",
          400: "#1F2A37",
          500: "#6B7280",
          700: "#374151",
          800: "#2B2B2B",
          900: "#111928",
        },
        success: "#3CB371",
        error: "#ff4444",
        warning: "#ffbb33",
        info: "#E5E7EB",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        base: "0px 24px 60px 0px rgba(21, 24, 38, 0.15)",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
