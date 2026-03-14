import { colorPrimitive, colorSemantic, darkModeOverrides } from "./colors";
import { fontSize, fontWeight, lineHeight, letterSpacing, fontFamily } from "./typography";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { shadows } from "./shadows";
function flattenTokens(obj, prefix) {
    const flattened = {};
    for (const [key, value] of Object.entries(obj)) {
        const newPrefix = prefix ? `${prefix}-${key}` : key;
        if (typeof value === "object" && value !== null) {
            Object.assign(flattened, flattenTokens(value, newPrefix));
        }
        else {
            flattened[newPrefix] = value;
        }
    }
    return flattened;
}
export function generateCssVariables() {
    const tokens = {
        color: colorPrimitive,
        font: {
            family: fontFamily,
            size: fontSize,
            weight: fontWeight,
            line: lineHeight,
            letter: letterSpacing,
        },
        space: spacing,
        radius: radii,
        shadow: shadows,
    };
    const flattened = flattenTokens(tokens, "ds");
    const rootVariables = Object.entries(flattened)
        .map(([key, value]) => `  --${key}: ${value};`)
        .join("\n");
    const semanticFlattened = flattenTokens({ color: colorSemantic }, "ds");
    const semanticVariables = Object.entries(semanticFlattened)
        .map(([key, value]) => `  --${key}: ${value};`)
        .join("\n");
    const darkFlattened = flattenTokens({ color: darkModeOverrides }, "ds");
    const darkVariables = Object.entries(darkFlattened)
        .map(([key, value]) => `  --${key}: ${value};`)
        .join("\n");
    return `
:root {
${rootVariables}
${semanticVariables}
}

[data-theme="dark"] {
${darkVariables}
}
  `.trim();
}
