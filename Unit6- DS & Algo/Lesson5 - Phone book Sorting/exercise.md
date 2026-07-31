# Practice Project: Phone Book Manager

### Ties back to Lesson 1 — Arrays & Sorting

## Why this project?

We covered **arrays** (`push`, `pop`, `unshift`, `shift`) and three sorting algorithms — **Bubble Sort, Quick Sort, and Merge Sort**. This project applies those ideas to something realistic: a phone book. Everything you need was covered in class
---

## What you're building

A program that stores contacts in an array and can add, view, update, delete, and sort them.

Each contact needs at least a **name** and **phone number**, e.g.:
```js
{ name: "Alice Smith", phone: "9876543210" }
```
Optional fields: email, date added.

---

## How to structure it

- **No class required.** Plain functions operating on a shared array is the expected approach. 
- **One `.js` file** with your data, your functions, and some test calls at the bottom.

---

## Requirements

1. **`addContact()`** — push a new contact onto the array.
2. **`viewContacts()`** — print every contact clearly. Build this first; you'll use it to check everything else.
3. **`updateContact()`** — find a contact (by name or phone) and change a field.
4. **`deleteContact()`** — remove a contact. Handle the case where it isn't found.
5. **Sort contacts, written by you (no `Array.sort()`):**
   - By name (A→Z and Z→A)
   - By phone number (ascending and descending)
   - Implement **at least one** of: Bubble Sort, Quick Sort, Merge Sort.
6. *(Bonus)* **`searchContact()`** — find a contact by name or phone number.

---

## Notes on the sorting algorithms

- **Bubble Sort** — repeatedly step through the array, swapping adjacent elements that are out of order. Simplest to write, easiest to reuse across the four cases (name/phone × ascending/descending) by just flipping the comparison.
- **Quick Sort** — pick a pivot, partition the array into elements smaller/larger than it, then recursively sort each side. Needs a comparison function too, so the same "flip the comparison for descending" trick applies.
- **Merge Sort** — split the array in half repeatedly until pieces have 1 element, then merge them back together in order. The merge step is where the comparison (and its direction) happens.

Pick whichever one you're most comfortable with for the requirement. For an extra challenge, implement a second one and compare: do they produce the same order? How differently do they get there, and how might that matter with 10,000 contacts instead of 6?

---

## Example: sorting by name

**Before:**
```
John Doe        - 1234567890
Alice Smith     - 9876543210
Bob Johnson     - 5551234567
```

**After (A → Z):**
```
Alice Smith     - 9876543210
Bob Johnson     - 5551234567
John Doe        - 1234567890
```