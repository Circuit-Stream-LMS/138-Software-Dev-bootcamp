// Implement Insertion sort Algorithim
/*
Explanation:
Start from the second element.
Compare it with elements before it and shift them if necessary.
Insert it in the correct position.
Repeat for the next elements.

PseudoCode:
1. Start with the second element in the array (index 1) because a single element (index 0) is already considered sorted.
2. Compare the current element with the elements before it:
    -Keep track of the current element (let's call it currentElement).
    -Compare currentElement with the elements before it (moving backwards).
3. Shift larger elements to the right:
    -If the element before currentElement is larger, shift that element one position to the right.
    -Continue this until you find the correct position for currentElement.
4. Place currentElement in its correct position:
    -Once you find the correct position, insert currentElement there.
5. Repeat for the next element:
    -Move to the next element and repeat the process until all elements are sorted.
*/

/**
 * Performs insertion sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function insertionSort(arr) {
}

// Example usage:
// const numbers = [9, 5, 1, 4, 3];
// console.log("Sorted Array:", insertionSort(numbers));


// Implement Selection Sort 
/*
Explanation:
Find the minimum element in the unsorted part of the array.
Swap it with the first unsorted element.
Repeat for all elements.

PseudoCode:
1. Start with the entire array as unsorted.
2. Loop through the array:
    -Begin with the first element (index 0), and treat it as the current minimum element.
3. Find the minimum element:
    -Inside the loop, start another loop from the next element (i+1 to n-1).
    -Compare each element with the current minimum element.
    -If you find a smaller element, update the minimum element.
4. Swap the minimum element with the current element:
    -After finding the minimum element in the unsorted part, swap it with the element at the current position (index i).
5. Repeat for the next element:
    -Move to the next index and repeat the process until all elements are sorted.
*/

/**
 * Performs selection sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {

}

// Example usage:
// const numbers2 = [64, 25, 12, 22, 11];
// console.log("Sorted Array:", selectionSort(numbers2));



