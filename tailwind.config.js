/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a7325ef2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, rgba(255,105,135,1) 0%, rgba(255,159,67,1) 50%, rgba(255,255,255,1) 100%)",
      },
      boxShadow: {
        "lg-custom": "0 10px 30px rgba(238, 174, 202, 0.5)",
      },
    },
  },
  plugins: [],
};
