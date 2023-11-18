module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7e": "#0000007e",
          "900_4c_01": "#0000004c",
          "900_00": "#00000000",
          "900_4c": "#0e0d0d4c",
          "900_0c": "#0000000c",
        },
        red: { 400: "#eb5757", 600: "#d34141" },
        light_blue: { 500: "#02a0fc", 800: "#006dd3" },
        green: { 400: "#41d37e", 500: "#409a74", 600: "#34b53a" },
        blue_gray: {
          50: "#eeeff0",
          100: "#d0d0d0",
          300: "#8ea3b6",
          400: "#8591a5",
          500: "#6b7c93",
          900: "#292d32",
          "900_01": "#303030",
          "400_03": "#777e90",
          "400_02": "#7c8b9f",
          "400_01": "#828990",
          "50_01": "#edf0f6",
          "300_01": "#8899a8",
        },
        gray: {
          100: "#f6f7f7",
          200: "#f0f0f0",
          300: "#dde0e6",
          500: "#909090",
          600: "#697076",
          900: "#17191b",
          "100_02": "#f7f7f7",
          "100_01": "#f5f5f5",
          "500_01": "#9da3a8",
          "500_02": "#a9abad",
          "900_02": "#212229",
          "900_03": "#1b1b1b",
          "600_02": "#848484",
          "600_01": "#696f79",
          "900_01": "#131517",
        },
        blue: {
          50: "#dfebff",
          100: "#cae5ff",
          400: "#369eff",
          700: "#237fd2",
          "400_63": "#369eff63",
          A700: "#0060ff",
        },
        indigo: { 200: "#9dacd3", 600: "#2d68a2", A700: "#4339f2" },
        white: { A700: "#ffffff", A700_a0: "#ffffffa0", A700_01: "#fefdfd" },
        amber: { 600: "#ffb200" },
      },
      fontFamily: {
        manrope: "Manrope",
        dmsans: "DM Sans",
        roboto: "Roboto",
        inter: "Inter",
      },
      boxShadow: { bs: "0px 1px  40px 0px #0000000c" },
      backgroundImage: { gradient: "linear-gradient(0deg ,#000000,#00000000)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};