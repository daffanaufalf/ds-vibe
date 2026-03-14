import fs from "fs";
import path from "path";
import { generateCssVariables } from "../src/css-variables";

const css = generateCssVariables();
const outputPath = path.resolve(__dirname, "../src/tokens.css");

fs.writeFileSync(outputPath, css);
console.log(`✅ Tokens generated at ${outputPath}`);
