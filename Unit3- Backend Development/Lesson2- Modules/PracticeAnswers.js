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
fs.writeFileSync(dataFilePath, JSON.stringify(userData, null, 2));
console.log("Data written to data.json");

// TODO: Read the file back and parse the JSON
// Hint: Use JSON.parse() with fs.readFileSync()
const readData = fs.readFileSync(dataFilePath, "utf8");
const parsedData = JSON.parse(readData);
console.log("Read data:", parsedData);

// TODO: Add a new skill to the user and update the file
// Hint: Parse, modify, then write back with JSON.stringify()
parsedData.skills.push("React");
fs.writeFileSync(dataFilePath, JSON.stringify(parsedData, null, 2));
console.log("Updated data with new skill");

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

const tempConverter = require("./tempConverter");

console.log("0°C to Fahrenheit:", tempConverter.celsiusToFahrenheit(0));
console.log("212°F to Celsius:", tempConverter.fahrenheitToCelsius(212));
console.log("300K to Celsius:", tempConverter.kelvinToCelsius(300));

// ============================================================
// Exercise 3: Directory Operations
// ============================================================
// TODO: Check if a 'backup' directory exists, if not create one
// Hint: Use fs.existsSync() and fs.mkdirSync()

const backupDir = path.join(__dirname, "backup");

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
  console.log("Backup directory created");
} else {
  console.log("Backup directory already exists");
}
