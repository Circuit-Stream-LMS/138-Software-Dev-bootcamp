
const fs = require("fs");
const path = require("path");

// ============================================================
// Exercise 1: File Operations
// ============================================================
// Create a file called 'data.json' with some JSON content

const dataFilePath = path.join(__dirname, "data.json");

// TODO: Write a JSON object to data.json
// Hint: Use fs.writeFileSync with JSON.stringify()
const userData = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  skills: ["JavaScript", "Node.js", "Python"],
};

// Write your code here:

// TODO: Read the file back and parse the JSON
// Hint: Use JSON.parse() with fs.readFileSync()

// TODO: Add a new skill to the user and update the file
// Hint: Parse, modify, then write back with JSON.stringify()

// ============================================================
// Exercise 2: Create a Custom Module
// ============================================================
// Create a temperature converter module

// TODO: Create a new file called 'tempConverter.js' that exports:
// - celsiusToFahrenheit(celsius)
// - fahrenheitToCelsius(fahrenheit)
// - kelvinToCelsius(kelvin)
// - celsiusToKelvin(celsius)
//
// Then require it here and convert:
// - 0°C to Fahrenheit
// - 212°F to Celsius
// - 300K to Celsius

// ============================================================
// Exercise 3: Directory Operations
// ============================================================
// TODO: Check if a 'backup' directory exists, if not create one
// Hint: Use fs.existsSync() and fs.mkdirSync()

// TODO: Copy 'data.json' to 'backup/data.json'
// Hint: Read original, then write to new location

// ============================================================
// Exercise 4: Package.json Exploration
// ============================================================
// TODO: Read the package.json file and log:
// - The project name
// - All available scripts
// - List all dependencies (both regular and dev)

// ============================================================
// Exercise 5: Path Module Challenge
// ============================================================
// Given this file path: /users/john/documents/projects/myApp/src/index.js

const complexPath = "/users/john/documents/projects/myApp/src/index.js";

// TODO: Use path methods to extract:
// - The file extension
// - The parent directory name (should be 'src')
// - The file name without extension
// - Create a new path: /users/john/documents/projects/myApp/dist/bundle.js

console.log("\n=== Practice Complete ===");
console.log("Check the output above to verify your answers.");
