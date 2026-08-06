
# Algorithm Practice Problems

### 1. **Two Sum**

#### Problem:
Given an array of integers `nums` and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

#### Example:
```plaintext
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

#### Explanation:
The goal is to find two numbers that sum up to the given target. This can be solved efficiently using a hash map to track the numbers and their indices as we iterate through the array.

---

### 2. **Move Zeroes**

#### Problem:
Given an array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array.

#### Example:
```plaintext
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

#### Explanation:
The task is to shift all zeroes to the end of the array while keeping the order of non-zero elements intact. This can be accomplished using the two-pointer technique to move non-zero elements forward.

---

### 3. Find the Second Largest Element in an Array

#### Problem
Given an array of integers, write a function to find the second largest element in the array. If there is no second largest element (i.e., if the array contains fewer than two distinct elements), return `-1`.

### Example: 
```javascript
Input: [3, 5, 2, 8, 6]
Output: 6
```
---

### 4. Contains Duplicate

#### Problem:
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

#### Example:
```plaintext
Input: nums = [1, 2, 3, 1]
Output: true
```

```plaintext
Input: nums = [1, 2, 3, 4]
Output: false
```

#### Explanation:
To determine if there are any duplicate values in the array, you can use a hash set to track the numbers as you iterate through the array. If a number is already in the set, return `true`; otherwise, continue checking the next element.

---

### 5. Longest Substring Without Repeating Characters

#### Problem:
Given a string `s`, find the length of the longest substring without repeating characters.

#### Example:
```plaintext
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

#### Explanation:
This is a sliding window problem, where we maintain a window (substring) of unique characters and try to expand or shrink it to find the longest possible substring. The key is to use a set or map to track characters and their last seen indices.

---

### 6. Anagram Check

#### Problem:
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s` and `false` otherwise.
An anagram is a word or phrase that is formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

#### Example:
```plaintext
Input: s = "anagram", t = "nagaram"
Output: true
```

```plaintext
Input: s = "rat", t = "car"
Output: false
```

#### Explanation:
To solve this, we need to check whether both strings have the same characters in the same frequency. A common approach is to use sorting or a hash map to count character frequencies and compare them.

---

### 7. Remove Adjacent Duplicates
**Problem:**
Given a string, repeatedly remove pairs of adjacent characters that are the same, until no adjacent duplicates remain. Use a stack to track characters as you go.
 
**Input Parameters:**
- `input` (string) → A lowercase string.
**Output:**
- A string with all adjacent duplicate pairs removed.
**Example Test Cases:**
| Input      | Expected Output |
|------------|------------------|
| `"abbaca"` | `"ca"`           |
| `"azxxzy"` | `"ay"`           |
 
**Sample Input to Pass to Function:**
```js
removeAdjacentDuplicates("abbaca"); // "ca"
removeAdjacentDuplicates("azxxzy"); // "ay"
```
 
**Hint:** for each character, check the top of the stack before you push. If it matches, that's a duplicate pair — pop instead of pushing.
 
---

### 8 Reverse the First K Elements of a Queue
**Problem:**
Given a queue and a number `k`, reverse the order of the first `k` elements, leaving the rest of the queue in its original order.
 
**Input Parameters:**
- `items` (array of numbers) → The starting queue, front to back.
- `k` (number) → How many elements from the front to reverse.
**Output:**
- An array representing the queue after reversing just the first `k` elements.
**Example Test Cases:**
| Input                  | k | Expected Output       |
|-------------------------|---|------------------------|
| `[1, 2, 3, 4, 5]`        | 3 | `[3, 2, 1, 4, 5]`      |
 
**Sample Input to Pass to Function:**
```js
reverseFirstK([1, 2, 3, 4, 5], 3);
// Output → [3, 2, 1, 4, 5]
```
 
**Hint:** a stack is a natural way to reverse things — dequeue the first `k` elements into a stack, then dequeue them back out and enqueue them again, followed by the rest of the queue untouched.

---