import { generateCssVariables } from "./packages/tokens/src/css-variables";
import fs from "fs";
import path from "path";

const css = generateCssVariables();
const dir = path.join(process.cwd(), "packages", "tokens", "src");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "tokens.css"), css);
console.log("Tokens generated!");
