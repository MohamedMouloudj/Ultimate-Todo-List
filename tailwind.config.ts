import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fff5f5",
          200: "#fee2e2",
          300: "#fecaca",
          400: "#fca5a5",
          500: "#f87171",
          600: "#ef4444",
          700: "#dc2626",
          800: "#b91c1c",
          900: "#991b1b",
        },
        accent: {
          100: "#fffbea",
          200: "#fef3c7",
          300: "#fde68a",
          400: "#fcd34d",
          500: "#fbbf24",
          600: "#f59e0b",
          700: "#d97706",
          800: "#b45309",
          900: "#92400e",
        },
        neutral: {
          100: "#ffffff",
          200: "#f9fafb",
          300: "#f3f4f6",
          400: "#e5e7eb",
          500: "#d1d5db",
          600: "#9ca3af",
          700: "#6b7280",
          800: "#4b5563",
          900: "#374151",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
