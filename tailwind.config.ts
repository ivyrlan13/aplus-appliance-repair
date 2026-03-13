import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: '#FF0000',
          blue: '#2b7bb9',
          dark: '#333333',
          body: '#464646',
          light: '#f2f2f2',
        },
      },
    },
  },
  plugins: [],
};
export default config;
