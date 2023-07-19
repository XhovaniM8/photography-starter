module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "copse, sans-serif",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#800020",
        grey: "#53565A",

        accent: "#DC0037",
      },
    },
  },
  plugins: [],
};
