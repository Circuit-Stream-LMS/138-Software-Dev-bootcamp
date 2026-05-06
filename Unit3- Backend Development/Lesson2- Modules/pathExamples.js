const path = require("path");


// ============================================================
// 1. Basic Path Information
// ============================================================

const samplePath = "/users/john/documents/project/file.txt";

console.log("Sample Path:", samplePath);
console.log("  dirname:", path.dirname(samplePath)); // /users/john/documents/project
console.log("  basename:", path.basename(samplePath)); // file.txt
console.log("  extname:", path.extname(samplePath)); // .txt

// ============================================================
// 2. Path Join - Building Paths Safely
// ============================================================

const joinedPath = path.join(
  "users",
  "john",
  "documents",
  "project",
  "file.txt",
);
console.log("Joined Path:", joinedPath);
// Output: users/john/documents/project/file.txt (or with backslashes on Windows)

// Practical example: Creating a config file path
const configDir = "config";
const settingsFile = "settings.json";
const configPath = path.join(__dirname, configDir, settingsFile);
console.log("Config Path:", configPath);



