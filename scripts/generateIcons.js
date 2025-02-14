import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDir = path.join(__dirname, "../assets/svg");
const outputFile = path.join(__dirname, "../assets/icons.ts");

function formatKey(name) {
  return "icon" + name.replace(/[-_]/g, " ")
    .split(" ")
    .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join("");
}

try {
  const files = fs.readdirSync(svgDir).filter(file => path.extname(file) === ".svg");

  const imports = files
    .map(file => {
      const rawName = path.basename(file, ".svg");
      const formattedName = formatKey(rawName);
      return `import ${formattedName} from "@/assets/svg/${file}";`;
    })
    .join("\n");

  const exportObject = `const ICONS = {\n  ${files
    .map(file => {
      const rawName = path.basename(file, ".svg");
      const formattedName = formatKey(rawName);
      return `"${rawName}": ${formattedName},`;
    })
    .join("\n  ")}\n} as const;\n\nexport { ICONS };`;

  const typeDefinition = `\nexport type IconName = keyof typeof ICONS;\n`;

  fs.writeFileSync(outputFile, `${imports}\n\n${exportObject}${typeDefinition}\n`);

  console.log("✅ icons.ts generated successfully!");
} catch (error) {
  console.error("❌ Error generating icons.ts:", error);
}
