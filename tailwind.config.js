module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343434",
          50: "#ffffff",
          100: "#cdcdcd",
          200: "#e6e6e6",
          300: "#b3b3b3",
          400: "#808080",
          500: "#676767",
          600: "#4d4d4d",
          700: "#343434",
          800: "#1a1a1a",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#2196f3",
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
      },
    },
  },
  important: "body",
}
