import type { Config } from "tailwindcss";
import preset from "./utils/preset";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  presets: [
    preset,
  ],
};
