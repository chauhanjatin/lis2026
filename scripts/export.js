#!/usr/bin/env node

/**
 * Cross-platform script to build static export for cPanel:
 * Path: https://libertyinfoscience.com/
 */
process.env.NODE_ENV = "production";
process.env.NEXT_EXPORT = "true";
process.env.NEXT_PUBLIC_BASE_PATH = "";
process.env.NEXT_PUBLIC_CONTACT_ENDPOINT = "/contact.php";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT_DIR, "out");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const ROUTE_FILE = path.join(ROOT_DIR, "src", "app", "api", "contact", "route.ts");
const ROUTE_HOLD = path.join(ROOT_DIR, "src", "app", "api", "contact", "route.ts.export-hold");
const NEXT_DIR = path.join(ROOT_DIR, ".next");

// Static export cannot run the localhost mail route, which reads the request.
// Move the file, not the folder: Windows denies renaming the folder while the editor has it open.
function parkApiRoute() {
  if (!fs.existsSync(ROUTE_FILE)) return;
  if (fs.existsSync(ROUTE_HOLD)) fs.rmSync(ROUTE_HOLD, { force: true });
  fs.renameSync(ROUTE_FILE, ROUTE_HOLD);
}

function restoreApiRoute() {
  if (!fs.existsSync(ROUTE_HOLD)) return;
  if (!fs.existsSync(ROUTE_FILE)) fs.renameSync(ROUTE_HOLD, ROUTE_FILE);
  else fs.rmSync(ROUTE_HOLD, { force: true });
}

console.log("🚀 Building Next.js Static Export for cPanel...");
console.log("📍 Base Path: / (https://libertyinfoscience.com/)");
console.log("🖼️ Custom Loader: src/lib/imageLoader.ts");
console.log("📁 Target Output: out/\n");

// Clear stale out folder if exists
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
}

// A dev-server cache still points at the parked mail route and fails the export type check.
if (fs.existsSync(NEXT_DIR)) {
  fs.rmSync(NEXT_DIR, { recursive: true, force: true });
}

const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";
parkApiRoute();
let result;
try {
  result = spawnSync(npxCmd, ["next", "build"], {
    cwd: ROOT_DIR,
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
} finally {
  restoreApiRoute();
}

if (!result || result.status !== 0) {
  console.error("\n❌ Build failed with exit code:", result?.status);
  process.exit(result?.status ?? 1);
}

// Ensure .htaccess is in out/
const htaccessSrc = path.join(PUBLIC_DIR, ".htaccess");
const htaccessDest = path.join(OUT_DIR, ".htaccess");
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log("📄 Verified .htaccess in out/");
}

console.log("\n📦 Packaging clean cPanel zip (POSIX format)...");
const zipPath = path.join(ROOT_DIR, "libertyinfoscience-cpanel.zip");
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const zipResult = spawnSync("tar", ["-a", "-c", "-f", "libertyinfoscience-cpanel.zip", "-C", "out", "*"], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  shell: true,
});

if (zipResult.status === 0) {
  const stats = fs.statSync(zipPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Created: libertyinfoscience-cpanel.zip (${sizeMB} MB)`);
  console.log("\n🎉 Static export & packaging completed successfully!");
  console.log("👉 Upload 'libertyinfoscience-cpanel.zip' to cPanel public_html/ and Extract it.\n");
} else {
  console.error("❌ Failed to create zip file.");
  process.exit(1);
}
