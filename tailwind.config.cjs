/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "440px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        primaryBeaver: "hsl(27, 22%, 51%)",
        primaryCodGray: "hsl(0, 0%, 7%)",
        mirage: "hsl(234, 30%, 13%)",
        ebonyClay: "hsl(218, 21%, 18%)",
        shuttleGray: "hsl(217, 14%, 42)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
