import resolveConfig from "tailwindcss/resolveConfig";
//@ts-expect-error tailwindConfig has no type definition
import tailwindConfig from "../../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export const xhainBlue30 = fullConfig.theme.colors["xhain-blue-30"];
export const xhainBlue40 = fullConfig.theme.colors["xhain-blue-40"];
export const xhainBlue50 = fullConfig.theme.colors["xhain-blue-50"];
export const xhainBlue60 = fullConfig.theme.colors["xhain-blue-60"];
export const xhainBlue80 = fullConfig.theme.colors["xhain-blue-80"];
