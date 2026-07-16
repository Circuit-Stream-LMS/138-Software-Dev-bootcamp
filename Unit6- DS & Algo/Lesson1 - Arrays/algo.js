// Searching and Sorting Algorithms in JavaScript

// 1. Linear Search - Time Complexity: O(n)
// Explanation:
// - In the worst case, we may need to check every element in the array.
// - If the target is at the end or not present, we loop through all elements.
// - Not efficient for large arrays.
// - **Performance: Poor** for large datasets.
// Pseudocode:
// 1. Loop through each element in the array.
// 2. If the element matches the target, return its index.
// 3. If no match is found, return -1.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found target at index i
        }
    }
    return -1; // Not found
}
console.log("Linear Search Result:", linearSearch([10, 20, 30, 40, 50], 30));

// 2. Binary Search - Time Complexity: O(log n)
// Explanation:
// - The array must be sorted before performing binary search.
// - We eliminate half of the array at each step.
// - Much faster than linear search for large arrays.
// - **Performance: Good** for large datasets.
// Pseudocode:
// 1. Set left to 0 and right to the last index.
// 2. While left is less than or equal to right:
//    a. Find the middle index.
//    b. If middle element is target, return the index.
//    c. If middle element is less than target, move left pointer to mid + 1.
//    d. Otherwise, move right pointer to mid - 1.
// 3. Return -1 if not found.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("Binary Search Result:", binarySearch([10, 20, 30, 40, 50], 30));

// Sorting Algorithms

// 1. Bubble Sort - Time Complexity: O(n^2)
// Explanation:
// - Compares each pair of adjacent elements and swaps if needed.
// - Takes too many comparisons for large arrays.
// - **Performance: Worst** for large datasets.
// Pseudocode:
// 1. Loop over the array multiple times.
// 2. In each pass, compare adjacent elements.
// 3. Swap them if they are in the wrong order.
// 4. Repeat until the array is sorted.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("Bubble Sort Result:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 2. Quick Sort - Time Complexity: O(n log n)
// Explanation:
// - Uses divide-and-conquer to split and sort smaller arrays.
// - Performs well on large datasets.
// - **Performance: Best** for large datasets compared to Bubble Sort.
// Pseudocode:
// 1. Choose a pivot (last element).
// 2. Partition the array into elements smaller than pivot and elements larger than pivot.
// 3. Recursively sort the left and right partitions.
// 4. Combine sorted partitions with the pivot in the middle.
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Quick Sort Result:", quickSort([64, 34, 25, 12, 22, 11, 90]));
