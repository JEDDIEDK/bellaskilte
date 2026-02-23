import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a2440",
        sky: "#12b6ff",
        lime: "#b7f419",
        coral: "#ff6f61",
        navy: "#0f1830"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(17, 31, 69, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
