# Linked Lists in JavaScript

## What is a Linked List?
A **linked list** is a linear data structure where elements (**nodes**) are connected using pointers rather than stored in contiguous memory locations like arrays.

Each **node** in a linked list consists of:
1. **Data** - The actual value stored.
2. **Pointer (next)** - A reference to the next node in the sequence.

## Memory Representation
Unlike arrays, linked lists allocate memory dynamically for each node. The nodes are stored at different memory locations and connected via pointers.

### Visual Representation
```
Head → [Data | Next] → [Data | Next] → [Data | Next] → null
```
Example:
```
Head → [10 | *] → [20 | *] → [30 | *] → null
```
- The **Head** points to the first node.
- Each node stores a **value** and a **pointer** to the next node.
- The last node’s `next` pointer is **null**, indicating the end of the list.


## Why Doesn't JavaScript Have Built-in Linked Lists?
JavaScript does not provide a built-in **Linked List** because:
- JavaScript arrays are **dynamic and resizable**, reducing the need for linked lists.
- Objects and maps can store key-value pairs efficiently.
- Linked lists are not commonly needed in frontend development.


## **Time Complexity of Linked List Operations**
| Operation  | Time Complexity |
|------------|----------------|
| Append (at end)  | O(n) |
| Prepend (at start) | O(1) |
| Delete (by value) | O(n) |
| Find (search by value) | O(n) |
| Reverse | O(n) |

## **Advantages of Linked Lists**
✅ **Efficient Insertions/Deletions** - O(1) time for insert/delete at the start.
✅ **Dynamic Size** - No need for preallocated space like arrays.

## **Disadvantages of Linked Lists**
❌ **Higher Memory Usage** - Each node requires extra storage for pointers.
❌ **Slower Access** - O(n) search compared to O(1) for indexed array access.

## **Use Cases of Linked Lists**
- Browser's back and forward history (each page is like a node for the browser)
