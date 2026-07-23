class Node {
    constructor(value) {
        this.value = value; // Data
        this.next = null;   // Pointer to next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The first node (initially empty)
    }

    // Append a node at the end of the list
    append(value) {
        let newNode = new Node(value); 

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Prepend a node at the beginning of the list
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return; // Empty list

        // If head needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next; // Remove the node
        }
    }

    // Find a node by value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; // Save next node
            current.next = prev; // Reverse pointer
            prev = current; // Move prev forward
            current = next; // Move current forward
        }

        this.head = prev; // Update head to new first node
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " → ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example Usage:
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
//list.printList(); // Output: 10 → 20 → 30 → null

list.prepend(5);
//list.printList(); // Output: 5 → 10 → 20 → 30 → null

list.delete(20);
//list.printList(); // Output: 5 → 10 → 30 → null

//console.log(list.find(10)); // Output: Node { value: 10, next: Node { value: 30, next: null } }

list.reverse();
list.printList(); // Output: 30 → 10 → 5 → null
