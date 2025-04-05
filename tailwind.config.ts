import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          indigo: "#4F46E5",
          emerald: "#10B981",
          blue: "#3B82F6",
          yellow: "#F59E0B",
          cyan: "#06B6D4",
          navy: "#1E3A8A",
          red: "#EF4444",
          sky: "#0EA5E9",
          orange: "#F97316",
          purple: "#8B5CF6",
          gray: "#6B7280",
          // Additional colors for future use
          green: "#22C55E",
          pink: "#EC4899",
          teal: "#14B8A6",
          lime: "#84CC16",
          amber: "#FBBF24",
          rose: "#F43F5E",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [ require("tailwind-scrollbar-hide")],
};

export default config;
