import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        pianoBlack: {
          "50": "#e3dde1",
          "100": "#c7bec6",
          "200": "#8f8592",
          "300": "#5a5662",
          "400": "#323139",
          "500": "#16161a",
          "600": "#050506",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000",
        },
        candyGrapeFizz: {
          "50": "#ffe6f2",
          "100": "#ffcff0",
          "200": "#f7a4ff",
          "300": "#cc80ff",
          "400": "#a068ff",
          "500": "#7f5af0",
          "600": "#7355d0",
          "700": "#6f54a6",
          "800": "#604a73",
          "900": "#39313c",
        },
        salsifyGrass: {
          "50": "#defadd",
          "100": "#bef6c5",
          "200": "#85eba9",
          "300": "#58de9d",
          "400": "#3acc92",
          "500": "#2cb67d",
          "600": "#2c9a5f",
          "700": "#307842",
          "800": "#31522f",
          "900": "#252a21",
        },
        roboticGods: {
          "50": "#faf3f9",
          "100": "#f3e7f4",
          "200": "#dad2e9",
          "300": "#bdbdda",
          "400": "#a9b2c9",
          "500": "#94a1b2",
          "600": "#7e8896",
          "700": "#656a75",
          "800": "#494950",
          "900": "#282729",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 3s infinite",
        float: "float 6s infinite",
      },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
