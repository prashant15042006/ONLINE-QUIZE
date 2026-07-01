import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enable class‑based dark mode
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./frontend/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(173, 70%, 45%)", // teal accent
        background: "hsl(210, 15%, 95%)",
        "background-dark": "hsl(210, 15%, 10%)",
      },
    },
  },
  plugins: [],
};

export default config;
