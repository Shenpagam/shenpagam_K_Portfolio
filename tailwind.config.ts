import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2DDE98",
          lightBg: "#EFF6FE",
          white: "#FFFFFF",
          gray: "#91959B",
          blue: "#225DCF",
          blueHover: "#1b4bb0",
          navy: "#253452",
          navyDark: "#1a253b",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
        serif: ["var(--font-ibarra-real-nova)", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(37, 52, 82, 0.05), 0 2px 6px -1px rgba(37, 52, 82, 0.03)",
        card: "0 10px 30px -5px rgba(37, 52, 82, 0.08), 0 4px 12px -2px rgba(37, 52, 82, 0.04)",
        glow: "0 0 20px rgba(45, 222, 152, 0.25)",
        blueGlow: "0 8px 24px rgba(34, 93, 207, 0.25)",
      },
      borderRadius: {
        DEFAULT: "10px",
      },
      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
