const math = require("./mathUtils.js");
const logger = require("./logger.js");

console.log("=== Using Imported Math Module ===\n");

// Basic operations
console.log("Basic Math:");
console.log("  10 + 5 =", math.add(10, 5));
console.log("  10 - 5 =", math.subtract(10, 5));
console.log("  10 * 5 =", math.multiply(10, 5));
console.log("  10 / 5 =", math.divide(10, 5));

// Advanced
console.log("\nAdvanced:");
console.log("  2^10 =", math.power(2, 10));
console.log("  √144 =", math.squareRoot(144));

// Array operations
console.log("\nArray Operations:");
const numbers = [10, 20, 30, 40, 50];
console.log("  Array:", numbers);
console.log("  Sum:", math.sum(numbers));
console.log("  Average:", math.average(numbers));

// ============================================================
// Using the Logger Module
// ============================================================
console.log("\n=== Using Logger Module ===\n");

logger.info("Application started");
logger.warn("This is a warning message");
logger.error("This is an error message");
