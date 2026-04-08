// TODO 1: Create an array called 'numbers' with 5 random numbers
const numbers = [1, 2, 3, 4, 5];

// TODO 2: Use a 'for' loop to log each number in the array to the console
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}   

// TODO 3: Use a 'while' loop to log numbers less than 5 from the array
let index = 0;
while (index < numbers.length) {
    if (numbers[index] < 5) {
        console.log(numbers[index]);
    }
    index++;
}

// TODO 4: Use a 'do...while' loop to ask the user for a number between 1 and 3

let userNumber;
do {
    userNumber = parseInt(prompt("Please enter a number between 1 and 3:"));
} while (userNumber < 1 || userNumber > 3);
console.log("You entered:", userNumber);

