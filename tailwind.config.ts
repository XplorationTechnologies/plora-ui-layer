import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  presets: [
    // eslint-disable-next-line ts/no-require-imports
    require("./utils/preset.ts"),
  ],
};
