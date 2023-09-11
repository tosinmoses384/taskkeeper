/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olivedrab: "#899928",
        "base-white": "#fff",
        "gray-900": "#101828",
        "gray-50": "#f9fafb",
        "gray-700": "#344054",
        "gray-100": "#f2f4f7",
        "primary-600": "#7f56d9",
        "gray-500": "#667085",
        "gray-400": "#98a2b3",
        "gray-600": "#475467",
        "gray-800": "#1d2939",
        "gray-200": "#eaecf0",
        mediumslateblue: "#3f5bf6",
        "gray-300": "#d0d5dd",
        whitesmoke: "#f5f5f5",
        blueviolet: "#9747ff",
        mediumblue: "#0e31f2",
        gray1: "rgba(0, 0, 0, 0.4)",
        black: "#000",
        "foundation-grey-normal": "#272727",
      },
      spacing: {},
      fontFamily: {
        "text-sm-medium": "Inter",
        inherit: "inherit",
        "work-sans": "'Work Sans'",
        "text-styles-title1-bold": "Satoshi",
      },
      borderRadius: {
        "181xl": "200px",
        xl: "20px",
        "9xl": "28px",
        "8xs": "5px",
        "6xs-4": "6.4px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "xs-2": "11.2px",
      "smi-7": "12.7px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
