# Stack and Queue Data Structures in JavaScript

## Stack
A **stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle. The last element added to the stack is the first one to be removed.

### Operations in a Stack
1. **Push** - Add an element to the top of the stack.
2. **Pop** - Remove the top element from the stack.
3. **Peek** - View the top element without removing it.
4. **isEmpty** - Check if the stack is empty.
5. **Size** - Get the number of elements in the stack.

### Visual Representation of a Stack
```
Top → | 5 |
       | 4 |
       | 3 |
       | 2 |
Bottom → | 1 |
```

### Pros and Cons of Stack
#### Pros:
- Fast operations (push and pop are O(1)).
- Simple and efficient for managing last-in-first-out operations.
- Used in function calls, undo mechanisms, and recursion.

#### Cons:
- Limited access; can only access the top element.
- Not suitable for searching or modifying elements other than the top.

### Real-World Use Cases
- **Backtracking Algorithms**: Used in solving maze problems or navigating tree structures.
- **Undo/Redo functionality**: Text editors and image editing applications use stacks to track changes.

---

## Queue
A **queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle. The first element added to the queue is the first one to be removed.

### Operations in a Queue
1. **Enqueue** - Add an element to the end of the queue.
2. **Dequeue** - Remove an element from the front of the queue.
3. **Front** - View the first element without removing it.
4. **isEmpty** - Check if the queue is empty.
5. **Size** - Get the number of elements in the queue.

### Visual Representation of a Queue
```
Front → | 1 | 2 | 3 | 4 | 5 | ← Rear
```

### Pros and Cons of Queue
#### Pros:
- Maintains order of elements.
- Useful for scheduling tasks and handling real-time data.
- Enqueue and dequeue operations are O(1) in an optimized implementation.

#### Cons:
- Accessing middle elements is inefficient (O(n) time complexity).
- Not suitable for last-in-first-out scenarios.

### Real-World Use Cases
- **Task Scheduling**: Operating systems use queues for managing CPU tasks.
- **Customer Service Systems**: Call centers and ticketing systems use queues to handle requests.
- **Printing Jobs**: Printers handle multiple print requests using queues.

---

## **Comparison: Stack vs Queue**
| Feature  | Stack (LIFO) | Queue (FIFO) |
|----------|-------------|-------------|
| Order | Last In, First Out | First In, First Out |
| Main Operations | Push, Pop, Peek | Enqueue, Dequeue, Front |
| Example Use Cases | Undo/Redo | Printer Queue, Task Scheduling |


