export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1

// practice Algo : Find first non repeating character in a string O(n)

function firstNonRepeatingChar(string) {

  const queue = new Queue();

  // Object to store how many times each character has appeared.
  const frequencyCount = {};

  // Iterate through the string
  for (let i = 0; i < string.length; i++) {

     // Get the current character.
    const char = string[i];

    // Increase the count for this character.
    // If the character hasn't been seen before,
    // frequencyCount[char] is undefined, so we treat it as 0.
    frequencyCount[char] = (frequencyCount[char] || 0) + 1;

    if (frequencyCount[char] === 1) {
      queue.enqueue(char);
    }

     // The front of the queue should always contain
    // the first non-repeating character seen so far.
    // If the character at the front now has a frequency
    // greater than 1, it is no longer unique, so remove it.
    // Continue removing characters until:
    // - the queue becomes empty, or
    // - the front of the queue is unique again.
    while (!queue.isEmpty() && frequencyCount[queue.front()] > 1) {
      queue.dequeue();
    }
  }

  // After processing the entire string:
  // - If the queue is empty, every character repeats.
  // - Otherwise, the front of the queue is the
  //   first non-repeating character.
  return queue.isEmpty() ? null : queue.front();
}

// Example usage:
console.log(firstNonRepeatingChar("aabcbcd")); // Output: "d"
