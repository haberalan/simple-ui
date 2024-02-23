import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      auto: "auto",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "24px",
        md: "24px",
        lg: "48px",
        xl: "48px",
        "2xl": "48px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1420px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-ibm-plex-mono)"],
    },
    fontSize: {
      "display-2xl": ["56px", "60px"],
      "display-xl": ["48px", "56px"],
      "display-lg": ["42px", "52px"],
      "display-md": ["36px", "44px"],
      "display-sm": ["32px", "40px"],
      "3xl": ["28px", "42px"],
      "2xl": ["24px", "32px"],
      xl: ["21px", "32px"],
      lg: ["18px", "24px"],
      md: ["16px", "24px"],
      sm: ["14px", "18px"],
      xs: ["12px", "16px"],
      "button-lg": ["16px", "24px"],
      "button-md": ["14px", "24px"],
      "button-sm": ["12px", "24px"],
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#0a0908",
      gray: {
        100: "#fafafa",
        200: "#f5f5f5",
        300: "#e5e5e5",
        400: "#d6d6d6",
        500: "#a3a3a3",
        600: "#737373",
        700: "#434343",
        800: "#2a2a2a",
        900: "#212529",
        1000: "#0f0f0f",
      },
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},
      warning: {},
      error: {
        100: "#fff0f3",
        200: "#ffccd5",
        300: "#ffb3c1",
        400: "#ff8fa3",
        500: "#ff758f",
        600: "#ff4d6d",
        700: "#c9184a",
        800: "#a4133c",
        900: "#800f2f",
        1000: "#590d22",
      },
    },
    borderRadius: {
      none: "0px",
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      full: "9999px",
    },
    backgroundImage: {
      // place for gradients
    },
    extend: {
      backgroundImage: {
        "grid-light": `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="rgba(10, 9, 8, 0.2)"><path d="M0 .5H31.5V32"/></svg>')`,
        "grid-dark": `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="rgba(250, 250, 250, 0.2)"><path d="M0 .5H31.5V32"/></svg>')`,
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
} satisfies Config;
