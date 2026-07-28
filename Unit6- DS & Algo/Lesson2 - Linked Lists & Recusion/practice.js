// Question 1: Flatten nested array

function flattenArray(arr) {
    let result = [];

  for (let element of arr) {
    // If element is an array, recursively flatten it
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      // If element is not an array, add it directly
      result.push(element);
    }
  }

  return result;
};

// console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Question 2: Check Palindrome

function isPalindrome(str) {
    // Base case: if string is 0 or 1 character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Compare first and last characters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Recursively check the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("game")); // true
console.log(isPalindrome("car")); // false