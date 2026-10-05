const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", "src", "index.html");
const cssPath = path.join(__dirname, "..", "src", "style.css");
const jsPath = path.join(__dirname, "..", "src", "script.js");

test("HTML file exists and contains required DevOps text elements", () => {
  assert.ok(fs.existsSync(htmlPath), "src/index.html must exist");
  const htmlContent = fs.readFileSync(htmlPath, "utf-8");

  assert.match(htmlContent, /DevOps Training/i, "Must contain 'DevOps Training'");
  assert.match(htmlContent, /CI\/CD Deployment Successful/i, "Must contain 'CI/CD Deployment Successful'");
  assert.match(htmlContent, /Version:/i, "Must contain 'Version:'");
  assert.match(htmlContent, /Deployed automatically using GitHub Actions/i, "Must contain 'Deployed automatically using GitHub Actions'");
});

test("CSS and JavaScript asset files exist and are not empty", () => {
  assert.ok(fs.existsSync(cssPath), "src/style.css must exist");
  assert.ok(fs.existsSync(jsPath), "src/script.js must exist");

  const cssContent = fs.readFileSync(cssPath, "utf-8");
  const jsContent = fs.readFileSync(jsPath, "utf-8");

  assert.ok(cssContent.trim().length > 0, "style.css should not be empty");
  assert.ok(jsContent.trim().length > 0, "script.js should not be empty");
});
