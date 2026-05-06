// Importing the 'os' module to demonstrate Node.js modules
const os = require('os');

// Importing a custom module (user-defined module)
const mathOperations = require('./mathOperations');

// Using the os module to get information about the system
console.log('Operating System Info:');
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);

// Demonstrating a custom module
console.log('Math Operations:');
console.log(`Addition: ${mathOperations.add(5, 10)}`);
console.log(`Subtraction: ${mathOperations.subtract(10, 5)}`);

// Basic functionality to explain Node.js
console.log('Hello from Node.js!');

// A simple function to demonstrate Node.js usage
function greet(name) {
  console.log(`Hello, ${name}! Welcome to learning Node.js.`);
}

greet('Student');

// Demonstrating variable declarations
const message = 'Learning Node.js Modules!';
let counter = 0;

// Demonstrating if-else
if (counter === 0) {
  console.log(message);
} else {
  console.log('Counter is not zero.');
}

// Demonstrating loops
for (let i = 1; i <= 3; i++) {
  console.log(`Loop iteration: ${i}`);
}

// Demonstrating an arrow function
const multiply = (a, b) => a * b;
console.log(`Multiplication of 2 and 3: ${multiply(2, 3)}`);

// Demonstrating array methods
const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(`Number: ${num}`);
});
