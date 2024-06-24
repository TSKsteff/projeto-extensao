import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    backgroundImage: {
      "cover-pattern":
          "linear-gradient(#0008, #000f),  url('https://images.pexels.com/photos/164935/pexels-photo-164935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  },
  },
  plugins: [],
};
export default config;
