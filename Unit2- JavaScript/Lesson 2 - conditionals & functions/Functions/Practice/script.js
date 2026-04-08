// Practice Set for Functions

// TODO 1: Create a function named "sayHello" that takes one parameter "name"
// The function should log "Hello, [name]!" to the console
// Call the function with your name as the argument

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("Vick");


// TODO 2: Create a function named "addNumbers" that takes two parameters "a" and "b"
// The function should return the sum of "a" and "b"
// Log the result of calling the function with any two numbers

function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(5, 10);
console.log(sum); // 15



// TODO 3: Create a function named "isEven" that takes one parameter "number"
// The function should return true if the number is even, and false if it's odd
// Call the function with any number and log the result

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// TODO 4: Create an arrow function named "multiplyNumbers" that takes two parameters "x" and "y"
// The function should return the product of "x" and "y"
// Call the function with any two numbers and log the result

const multiplyNumbers = (x, y) => {
    return x * y;
};

console.log(multiplyNumbers(5, 10)); // 50


// TODO 5: Create an arrow function named "divideNumbers" that takes two parameters "x" and "y"
// If "y" is zero, the function should return "Cannot divide by zero"
// Otherwise, it should return the result of dividing "x" by "y"
// Test the function with values where "y" is zero and where "y" is not zero

const divideNumbers = (x, y) => {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
};

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // Cannot divide by zero


// TODO 6: Create a function named "square" using the traditional function syntax
// The function should take one parameter and return its square value
// Then, create the same function using the arrow function syntax

function squareTraditional(num) {
    return num * num;
} 
const squareArrow = num => num * num;
console.log(squareTraditional(5)); // 25
console.log(squareArrow(5)); // 25  