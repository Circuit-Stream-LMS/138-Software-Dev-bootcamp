// TODO 1: Create an array named "colors" with at least 5 color names (e.g., "red", "blue", "green", etc.)

let colors = ["red", "blue", "green", "yellow", "purple"];


// TODO 2: Log the array to the console
console.log(colors);

// TODO 3: Log the length of the array using the length property
console.log(colors.length); // 5

// TODO 4: Add a new color to the end of the array using the push method
colors.push("orange");
console.log(colors);

// TODO 5: Remove the last element of the array using the pop method and log the removed color
const removedColor = colors.pop();
console.log(removedColor);

// TODO 6: Remove the first element of the array using the shift method and log the removed color
const removedFirstColor = colors.shift();
console.log(removedFirstColor);

// TODO 7: Add a new color to the beginning of the array using the unshift method
colors.unshift("pink");
console.log(colors);

// TODO 8: Create a new array called "selectedColors" using the slice method to include the first 2 colors
const selectedColors = colors.slice(0, 2);
console.log(selectedColors);

// TODO 9: Use the splice method to remove 2 colors starting from the 1st index and add "black" and "white" instead
colors.splice(1, 2, "black", "white");
console.log(colors);

// TODO 10: Log the final array and its length
console.log(colors);
console.log(colors.length);
