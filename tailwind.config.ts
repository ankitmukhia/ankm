import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/posts/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hubot)", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.stone
      },
      boxShadow: ({ theme }) => ({
        "surface-glass": `
          inset 0.25px 1px 0 0 ${theme("colors.rose.200 / 3%")},
          0px 0.3px 0.3px rgba(3, 2, 2, 0.02),
          0px 2.2px 2.5px -0.4px rgba(3, 2, 2, 0.02),
          0px 4.3px 4.8px -0.8px rgba(3, 2, 2, 0.02),
          0px 7.5px 8.4px -1.2px rgba(3, 2, 2, 0.02),
          0px 12.8px 14.4px -1.7px rgba(3, 2, 2, 0.02),
          0px 21px 23.6px -2.1px rgba(3, 2, 2, 0.02),
          0px 33.2px 37.4px -2.5px rgba(3, 2, 2, 0.02)`,
        "surface-elevation-low": `
          inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 1.5%")}, 
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.2),
          0.4px 0.8px 1px -1.2px rgba(3, 2, 2, 0.2),
          1px 2px 2.5px -2.5px rgba(3, 2, 2, 0.2);`,
        "surface-elevation-medium": `
          inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 3%")},
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.1),
          0.8px 1.6px 2px -0.8px rgba(3, 2, 2, 0.1),
          2.1px 4.1px 5.2px -1.7px rgba(3, 2, 2, 0.1),
          5px 10px 12.6px -2.5px rgba(3, 2, 2, 0.1)`,
      }),
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ".layout-sm": {
          "grid-template-columns": `1fr min(${theme("screens.sm")},100%) 1fr`,
        },
        ".layout-xl": {
          "grid-template-columns": `1fr minmax(auto,${theme("spacing.60")}) min(${theme("screens.sm")},100%) minmax(auto,${theme("spacing.60")}) 1fr`,
        },
      })
    }),
    require("@tailwindcss/forms"),
  ],
};
export default config;
