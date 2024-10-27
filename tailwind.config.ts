import type { Config } from "tailwindcss";
import { ploraPreset } from "./utils/preset";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  presets: [ploraPreset],
};
