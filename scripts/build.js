const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
const distDir = path.join(__dirname, "..", "dist");

console.log("Starting build process...");

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const filesToCopy = ["index.html", "style.css", "script.js"];

for (const file of filesToCopy) {
  const srcFile = path.join(srcDir, file);
  const distFile = path.join(distDir, file);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, distFile);
    console.log(`Copied ${file} -> dist/${file}`);
  } else {
    console.error(`Error: missing file ${srcFile}`);
    process.exit(1);
  }
}

console.log("Build successfully completed! Distribution artifact ready in dist/");
