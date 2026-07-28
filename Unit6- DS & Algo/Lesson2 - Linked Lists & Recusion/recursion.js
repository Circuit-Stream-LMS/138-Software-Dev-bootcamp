function quickSort(arr) {
    // Base case: An array with 0 or 1 elements is already sorted
    if (arr.length <= 1) return arr;

    // Choosing the last element as the pivot
    const pivot = arr[arr.length - 1];

    // Arrays to hold elements smaller and larger than pivot
    const left = [];  
    const right = [];  
    const middle = []; // To handle duplicate elements

    // Partitioning: Compare each element with pivot
    for (let el of arr) {
        if (el < pivot) {
            left.push(el); // Elements smaller than pivot go to left
        } else if (el > pivot) {
            right.push(el); // Elements greater than pivot go to right
        } else {
            middle.push(el); // Elements equal to pivot stay in the middle
        }
    }
    // Recursively apply Quick Sort to left and right subarrays
    return [...quickSort(left), ...middle, ...quickSort(right)]; 
}

// Example usage
// const array = [5, 3, 8, 4, 2, 7, 1, 10];
// console.log(quickSort(array)); // Output: [1, 2, 3, 4, 5, 7, 8, 10]


//Practice question: Develop a recursive function that calculates the result of raising a number 'n' to the power 'x'. Ex: calculate 5^6 --> n^x

// function calculate(n, x) {
//     // Base case: anything raised to the power of 0 is 1
//     if (x === 0) {
//         return 1;
//     }

//     // Recursive case: multiply n by the result of the function with x-1
//     return n * calculate(n, x - 1);
// }

// console.log(calculate(5, 6)); // Output: 15625

// Algorithm to print Fibonacci series up to nth number.  -> 8th poistion
// Fibonacci series is a sequence of numbers where each number is the sum of the two numbers before it. The sequence starts with 0 and 1, and continues as 1, 2, 3, 5, 8, 13, 21, and so on

function printFibonacciSeries(n, current = 0, next = 1) {
    // Base case: when n reaches 0, stop recursion
    if (n === 0) {
        return;
    }

    // Print the current Fibonacci number
    console.log(current);

    // Recursively call the function, updating the current and next Fibonacci numbers
    printFibonacciSeries(n - 1, next, current + next);
}

// Example usage:
let n = 10; 
printFibonacciSeries(n);
