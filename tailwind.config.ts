import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      backgroundImage: {
        logo: "url(/logo.png)",
        resetBannerBg: "url(/reset-banner.png)",
        healthyWoman: "url(/healthy-woman.png)",
        resetLowerBg: "url(/reset-lower-banner.png)",
        gradientTop: "url(/gradient-top.png)",
        gradientDown: "url(/gradient-down.png)",
      },
      fontFamily: {
        sans: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
