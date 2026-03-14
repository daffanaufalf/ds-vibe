import { colorPrimitive, colorSemantic, darkModeOverrides } from "./colors";
import { fontSize, fontWeight, lineHeight, letterSpacing, fontFamily } from "./typography";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { shadows } from "./shadows";

type TokenObject = Record<string, string | Record<string, string>>;

function flattenTokens(obj: TokenObject, prefix: string): Record<string, string> {
  const flattened: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(flattened, flattenTokens(value as TokenObject, newPrefix));
    } else {
      flattened[newPrefix] = value as string;
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

  const flattened = flattenTokens(tokens as any, "ds");
  const rootVariables = Object.entries(flattened)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  const semanticFlattened = flattenTokens({ color: colorSemantic } as any, "ds");
  const semanticVariables = Object.entries(semanticFlattened)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  const darkFlattened = flattenTokens({ color: darkModeOverrides } as any, "ds");
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
