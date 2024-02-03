/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.vue",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#157a6e",
        "primary-content": "#9fefe5",
        "primary-dark": "#0e4e47",
        "primary-light": "#1ca595",

        secondary: "#3b157a",
        "secondary-content": "#bd9fef",
        "secondary-dark": "#260e4e",
        "secondary-light": "#501ca5",

        background: "#eef2f1",
        foreground: "#fbfcfc",
        border: "#dbe3e2",

        copy: "#212b2a",
        "copy-light": "#597370",
        "copy-lighter": "#7e9b97",

        success: "#157a15",
        warning: "#7a7a15",
        error: "#7a1515",

        "success-content": "#9fef9f",
        "warning-content": "#efef9f",
        "error-content": "#ef9f9f",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
