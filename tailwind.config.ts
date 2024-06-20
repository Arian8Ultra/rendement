import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // important: '#root',
  theme: {
    extend: {
      colors: {
        main: {
          100: "#dceefd",
          200: "#b9defc",
          300: "#95cdfa",
          400: "#72bdf9",
          500: "#4facf7",
          600: "#3f8ac6",
          700: "#2f6794",
          800: "#204563",
          900: "#102231",
        },
        secondary: {
          100: "#e5ccff",
          200: "#cb99ff",
          300: "#b066ff",
          400: "#9633ff",
          500: "#7c00ff",
          600: "#6300cc",
          700: "#4a0099",
          800: "#320066",
          900: "#190033",
        },
        background: {
          100: "#d4d4d7",
          200: "#a9a8ae",
          300: "#7d7d86",
          400: "#52515d",
          500: "#272635",
          600: "#1f1e2a",
          700: "#171720",
          800: "#100f15",
          900: "#08080b",
        },
        alert: {
          100: "#fffadb",
          200: "#fff5b7",
          300: "#fff194",
          400: "#ffec70",
          500: "#ffe74c",
          600: "#ccb93d",
          700: "#998b2e",
          800: "#665c1e",
          900: "#332e0f",
        },
        pink: {
          100: "#ffdee0",
          200: "#ffbdc1",
          300: "#ff9ba2",
          400: "#ff7a83",
          500: "#ff5964",
          600: "#cc4750",
          700: "#99353c",
          800: "#662428",
          900: "#331214",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  plugins: [],
};
export default config;
