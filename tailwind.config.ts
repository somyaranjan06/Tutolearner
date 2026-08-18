import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Official TutoLearner Primary Blue
        primary: {
          DEFAULT: "#0B4982",
          dark: "#083A68",
          light: "#125D9E",
          50: "#F0F7FF",
          100: "#E0EFFF",
          200: "#BAE0FD",
          300: "#7CC5FB",
          400: "#38A6F6",
          500: "#0E87E3",
          600: "#0B4982",
          700: "#083A68",
          800: "#072C4F",
          900: "#06233F",
          950: "#031424",
          foreground: "#ffffff",
        },
        // Official TutoLearner Secondary Green / Accent
        accent: {
          DEFAULT: "#6BB640",
          dark: "#579631",
          light: "#7ECB51",
          50: "#F2FAF0",
          100: "#E4F6DE",
          200: "#C9EEBD",
          300: "#A6E194",
          400: "#81D067",
          500: "#6BB640",
          600: "#579631",
          700: "#427325",
          800: "#365B20",
          900: "#2E4D1D",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6BB640",
          dark: "#579631",
          light: "#7ECB51",
          foreground: "#ffffff",
        },
        // Semantic brand tokens
        brand: {
          blue: "#0B4982",
          blueDark: "#083A68",
          blueLight: "#125D9E",
          blueSubtle: "#F0F7FF",
          green: "#6BB640",
          greenDark: "#579631",
          greenLight: "#7ECB51",
          greenSubtle: "#F2FAF0",
          surfaceDark: "#071F36",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        status: {
          verifiedBg: "#F2FAF0",
          verifiedText: "#365B20",
          verifiedBorder: "#C9EEBD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "0.9375rem", letterSpacing: "0.025em" }],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(11, 73, 130, 0.05)",
        card: "0 1px 3px 0 rgba(11, 73, 130, 0.06), 0 1px 2px -1px rgba(11, 73, 130, 0.04)",
        lifted: "0 10px 30px -4px rgba(11, 73, 130, 0.1), 0 4px 6px -2px rgba(11, 73, 130, 0.04)",
        dropdown: "0 10px 25px -5px rgba(11, 73, 130, 0.12), 0 8px 10px -6px rgba(11, 73, 130, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
