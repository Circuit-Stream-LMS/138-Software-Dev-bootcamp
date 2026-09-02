# React State Management: `useState` vs `useReducer`

React provides multiple ways to manage state in functional components. The two most common hooks are:

- `useState`
- `useReducer`

---

## useState

`useState` is the simplest way to add local component state. It is ideal for managing **simple or primitive values** such as booleans, strings, numbers, or small objects.

### Best For:
- Boolean flags like `isLoading`, `isOpen`
- Simple values like `count`, `text`, `formInput`
- Managing individual form fields

### Pros:
- Very easy to use and understand
- Minimal boilerplate
- Great for most everyday state needs

### Cons:
- Gets harder to manage with multiple related states
- Can lead to scattered logic and many `useState` calls
- Less efficient for complex or dependent state changes

---

## useReducer

`useReducer` is better suited for **complex state logic**, especially when state values are related or when actions trigger specific state transitions.

###  Best For:
- State objects with multiple values
- Scenarios where next state depends on previous state
- Managing complex interactions like forms, wizards, modals, or tabs
- Keeping update logic centralized and predictable

###  Pros:
- Cleaner and more maintainable for complex logic
- Keeps state transitions centralized in one reducer function
- Makes it easier to test and reuse logic
- Useful when managing global state without external libraries

###  Cons:
- More verbose than `useState`
- Can be overkill for simple state
- Slightly harder to learn for beginners

---

##  When To Use What?

| Scenario                                | Recommended Hook |
|-----------------------------------------|------------------|
| Toggle a value                          | `useState`       |
| Manage a simple counter                 | `useState`       |
| Handle a few unrelated form fields      | `useState`       |
| Handle a complex form with many fields  | `useState/useReducer`     |
| Manage tabs, wizards, or steps          | `useReducer`     |
| Keep state transitions centralized      | `useReducer`     |
| Build a reusable or testable state logic| `useReducer`     |

---
