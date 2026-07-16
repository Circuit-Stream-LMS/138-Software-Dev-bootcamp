// Understanding Arrays in JavaScript
// Arrays in JavaScript are used to store multiple values in a single variable.
// Unlike traditional arrays in languages like C or Java, JavaScript arrays are dynamic and can hold different data types.

// Creating an Array
let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);

// Memory Representation:
// In JavaScript, arrays are implemented as objects where indexes are treated as keys.
// Each element is stored in memory with a reference to its position in the array.

// Accessing elements using index
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

// Arrays are dynamic - they can grow and shrink
numbers.push(60); // Adding element to the end
console.log("After push:", numbers);

numbers.pop(); // Removing element from the end
console.log("After pop:", numbers);

// other methods
// slice, splice, concat, shift, unshift, join
