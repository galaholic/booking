import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      colors: {
        ink: "#1f1f1b",
        sand: "#f7f1e7",
        clay: "#e4d3c0",
        copper: "#c27443",
        moss: "#64735a",
        tide: "#28555a"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 31, 27, 0.12)"
      },
      borderRadius: {
        xl: "20px"
      }
    }
  },
  plugins: []
}

export default config
