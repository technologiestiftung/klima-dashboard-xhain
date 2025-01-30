import resolveConfig from "tailwindcss/resolveConfig";
//@ts-expect-error tailwindConfig has no type definition
import tailwindConfig from "../../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export const xhainBlue20 = fullConfig.theme.colors["xhain-blue-20"];
export const xhainBlue30 = fullConfig.theme.colors["xhain-blue-30"];
export const xhainBlue40 = fullConfig.theme.colors["xhain-blue-40"];
export const xhainBlue50 = fullConfig.theme.colors["xhain-blue-50"];
export const xhainBlue60 = fullConfig.theme.colors["xhain-blue-60"];
export const xhainBlue80 = fullConfig.theme.colors["xhain-blue-80"];
export const xhainGreen30 = fullConfig.theme.colors["xhain-green-30"];
export const xhainGreen50 = fullConfig.theme.colors["xhain-green-50"];
export const xhainGreen60 = fullConfig.theme.colors["xhain-green-60"];
