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
    // Get the total number of elements in the array
    const n = arr.length;

    // Start from index 1 because a single element (index 0)
    // is already considered sorted.
    for (let i = 1; i < n; i++) {

        // Save the current element.
        // This is the value we want to insert into the sorted part.
        let currentElement = arr[i];

        // Start comparing with the element immediately before it.
        let j = i - 1;

        // Continue moving left while:
        // 1. We haven't gone past the beginning of the array.
        // 2. The current sorted element is larger than currentElement.
        while (j >= 0 && arr[j] > currentElement) {

            // Shift the larger element one position to the right.
            // This creates space for currentElement.
            arr[j + 1] = arr[j];

            // Move one position further left.
            j--;
        }

        // Insert currentElement into its correct position.
        // j + 1 is either:
        // - the first element greater than currentElement that was shifted, or
        // - index 0 if currentElement is the smallest element.
        arr[j + 1] = currentElement;
    }

    // Return the now sorted array.
    return arr;
}

// Example usage:
// const numbers = [9, 5, 1, 4, 3, 17, 2, 8, 22, 10];
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

    // Store the length of the array
    const n = arr.length;

    // Loop through each position in the array.
    // Each iteration places one smallest element in its correct position.
    for (let i = 0; i < n - 1; i++) {

        // Assume the current position contains the smallest value.
        // We will search and update this if we find something smaller.
        let minIndex = i;

        // Search the remaining unsorted part of the array.
        // We start from i + 1 because everything before i is already sorted.
        for (let j = i + 1; j < n; j++) {

            // If the current element is smaller than our current minimum
            if (arr[j] < arr[minIndex]) {

                // Update minIndex to remember where the smaller element is.
                minIndex = j;
            }
        }
        // If minIndex changed, it means we found a smaller element.
        if (minIndex !== i) {

            // Swap the smallest element with the first element
            // of the unsorted section.
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }


    // Return the sorted array.
    return arr;
}

// Example usage:
const numbers2 = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers2));



