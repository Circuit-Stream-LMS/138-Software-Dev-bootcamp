export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3

// Practice Algo : Reverse a string O(n)

function reverseString(string) {
  const stack = new Stack();

  // Push all characters into the stack
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  let reversedString = "";

  // Pop characters from the stack and build the reversed string
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
