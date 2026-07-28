/*
Binary Tree Overview:
----------------------
- A Binary Tree is a tree where each node has at most two children: 
  a left child and a right child.

- In this example, we will create a simple Binary Search Tree (BST):
    → Values smaller than a node go to the LEFT.
    → Values greater than or equal to a node go to the RIGHT.

- We will:
  1️⃣ Define a Node class (represents a single tree node).
  2️⃣ Define a BinaryTree class (manages the whole tree).
  3️⃣ Add an insert method to add values to the tree.
  4️⃣ Add an inOrder method to print values in sorted order.
*/


// Class to create a single Node
class Node {
  constructor(value) {
    this.value = value;  // Store the node's value
    this.left = null;    // Pointer to the left child (starts as null)
    this.right = null;   // Pointer to the right child (starts as null)
  }
}


// Class to create and manage the Binary Tree
class BinaryTree {
  constructor(rootValue) {
    // When we create a tree, we need a root node
    this.root = new Node(rootValue);
  }

  /*
  Insert Method:
  --------------
  - Adds a new node to the tree in the correct position.
  - Uses a loop to find the right spot.
  */
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value
    let currentNode = this.root;     // Start traversal at the root

    while (true) {
      if (value < currentNode.value) {
        // If value is smaller, go LEFT
        if (currentNode.left === null) {
          currentNode.left = newNode; // Place node if left spot is empty
          break;                      // Exit loop once inserted
        } else {
          currentNode = currentNode.left; // Move further left
        }
      } else {
        // If value is greater or equal, go RIGHT
        if (currentNode.right === null) {
          currentNode.right = newNode; // Place node if right spot is empty
          break;
        } else {
          currentNode = currentNode.right; // Move further right
        }
      }
    }
  }

  /*
  In-order Traversal:
  -------------------
  - Visits nodes in ascending order (Left → Root → Right).
  - Uses RECURSION (function calls itself).
  */
  inOrder(node = this.root) {
    if (node === null) return; // Base case: stop at empty branch

    this.inOrder(node.left);       // 1️⃣ Visit left subtree
    console.log(node.value);       // 2️⃣ Print current node value
    this.inOrder(node.right);      // 3️⃣ Visit right subtree
  }
}


// --------------- USAGE EXAMPLE ----------------
const tree = new BinaryTree(10);  // Create a tree with root value 10
tree.insert(5);                   // Insert value 5 (goes to left)
tree.insert(15);                  // Insert value 15 (goes to right)
tree.insert(3);                   // Insert value 3 (goes further left)

// Print values in sorted order → 3, 5, 10, 15
console.log("In-order Traversal:");
tree.inOrder();
