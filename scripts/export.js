#!/usr/bin/env node

/**
 * Cross-platform script to build static export for cPanel:
 * Path: https://libertyinfoscience.com/projects/newlis2026
 */
process.env.NODE_ENV = "production";
process.env.NEXT_EXPORT = "true";
process.env.NEXT_PUBLIC_BASE_PATH = "/projects/newlis2026";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT_DIR, "out");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

console.log("🚀 Building Next.js Static Export for cPanel...");
console.log("📍 Base Path: /projects/newlis2026");
console.log("🖼️ Custom Loader: src/lib/imageLoader.ts");
console.log("📁 Target Output: out/\n");

// Clear stale out folder if exists
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
}

const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(npxCmd, ["next", "build"], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

if (result.status !== 0) {
  console.error("\n❌ Build failed with exit code:", result.status);
  process.exit(result.status ?? 1);
}

// Ensure .htaccess is in out/
const htaccessSrc = path.join(PUBLIC_DIR, ".htaccess");
const htaccessDest = path.join(OUT_DIR, ".htaccess");
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log("📄 Verified .htaccess in out/");
}

console.log("\n📦 Packaging clean cPanel zip (POSIX format)...");
const zipPath = path.join(ROOT_DIR, "newlis2026-cpanel.zip");
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const zipResult = spawnSync("tar", ["-a", "-c", "-f", "newlis2026-cpanel.zip", "-C", "out", "*"], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  shell: true,
});

if (zipResult.status === 0) {
  const stats = fs.statSync(zipPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Created: newlis2026-cpanel.zip (${sizeMB} MB)`);
  console.log("\n🎉 Static export & packaging completed successfully!");
  console.log("👉 Upload 'newlis2026-cpanel.zip' to cPanel: public_html/projects/newlis2026/ and Extract it.\n");
} else {
  console.error("❌ Failed to create zip file.");
  process.exit(1);
}
