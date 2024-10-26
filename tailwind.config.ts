import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "lemon": {
          50: "#fefee8",
          100: "#feffc2",
          200: "#fffe88",
          300: "#fff544",
          400: "#fee715",
          500: "#eecd04",
          600: "#cda001",
          700: "#a47204",
          800: "#875a0c",
          900: "#734910",
          950: "#432605",
        },
        "shark": {
          50: "#f7f7f8",
          100: "#efeef0",
          200: "#dbdadd",
          300: "#bcbabf",
          400: "#95949c",
          500: "#797780",
          600: "#626069",
          700: "#514f55",
          800: "#454349",
          900: "#3c3b3f",
          950: "#2d2c2f",
        },
        "strom-dust": {
          50: "#f5f5f6",
          100: "#e6e6e7",
          200: "#d0d0d1",
          300: "#afaeb2",
          400: "#86868a",
          500: "#6b6b6f",
          600: "#5f5e62",
          700: "#4e4e50",
          800: "#444446",
          900: "#3c3c3d",
          950: "#262527",
        },

      },
    },
  },
};
