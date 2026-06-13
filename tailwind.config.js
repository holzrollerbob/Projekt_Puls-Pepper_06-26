/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        petrol: "#13332F",
        "petrol-deep": "#0E2723",
        ink: "#1E2422",
        paper: "#F4F0E8",
        "paper-warm": "#EFE9DC",
        brass: "#9A7322",
        "brass-bright": "#B68C32",
        leinen: "#D8CFBE",
        "leinen-soft": "#E6DFCF",
        "paper-dark": "#EDE7D8",
        "muted-dark": "#A9B6AE",
        background: "#F4F0E8",
        muted: "#EFE9DC",
        border: "#D8CFBE",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
