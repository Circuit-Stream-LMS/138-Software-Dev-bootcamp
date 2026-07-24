import { Stack } from "./stack.js";
import {Queue} from "./queue.js";


function isBalanced(input) {
  const stack = new Stack(); // create a stack to hold opening brackets
  const pairs = { ')': '(', '}': '{', ']': '[' }; // mapping of closing to opening

  for (let char of input) {
    // If it's an opening bracket, push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } 
    // If it's a closing bracket
    else if (char === ')' || char === '}' || char === ']') {
      // Pop the last element from stack
      const top = stack.pop();

      // If stack was empty or doesn't match, it's unbalanced
      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  // If stack is empty at the end, it's balanced
  return stack.isEmpty();
};

console.log(isBalanced("({[]})"));


function processActions(actions) {
  const stack = new Stack(); // create a stack to store actions

  for (let action of actions) {
    if (action === "UNDO") {
      stack.pop(); // remove last action when UNDO is encountered
    } else {
      stack.push(action); // otherwise push action to stack
    }
  }

  // Convert stack items to an array and return
  return stack.items;
};

console.log(processActions(["type A", "type B", "UNDO", "type C"]));


function processTasks(taskList) {
  const queue = new Queue(); // create a queue
  const completed = [];

  // Add all tasks to the queue
  for (let task of taskList) {
    queue.enqueue(task);
  }

  // Process tasks in FIFO order
  while (!queue.isEmpty()) {
    const task = queue.dequeue(); // get first task
    completed.push(task); // add it to completed list
  }

  return completed;
};

console.log(processTasks(["task1", "task2", "task3"]));


function hotPotato(players, numPasses) {
  const queue = new Queue(); // create a queue

  // Add all players to the queue
  for (let player of players) {
    queue.enqueue(player);
  }

  // Continue until one player is left
  while (queue.size() > 1) {
    // Pass the potato numPasses times
    for (let i = 0; i < numPasses; i++) {
      // Move the front player to the back
      queue.enqueue(queue.dequeue());
    }

    // Remove the player holding the potato
    queue.dequeue();
  }

  // The last remaining player
  return queue.front();
};

console.log(hotPotato(["A", "B", "C", "D"], 3));