## 1. What are Controlled Components?
- A controlled component is an input element (like input, textarea, or select) whose value is **controlled by React state**.
- The source of truth is React state, not the DOM.
- You pass the value via React state and update it using an event handler.
- React always knows the current value of the field.

---

## 2. What are Uncontrolled Components?
- An uncontrolled component is an input element that manages its own state **inside the DOM**, not React.
- The source of truth is the actual DOM element, accessed using a ref.
- You provide an initial value using defaultValue or defaultChecked.
- React only knows the value when you explicitly read it from the DOM.

---

## 3. Key Differences

| Feature                     | Controlled Component                        | Uncontrolled Component                    |
|-----------------------------|---------------------------------------------|-------------------------------------------|
| Source of Truth             | React State                                | DOM (via ref)                             |
| Value Prop                  | Uses `value`                               | Uses `defaultValue`                       |
| Change Handling             | Requires explicit event handler             | Not required (value read later via ref)   |
| React Knows Current Value?  | Yes, always in sync with state              | No, only when queried                     |
| Code Complexity             | More code, but predictable and testable     | Less code, but less control               |
| Best For                    | Forms with validation, dynamic updates, UI sync | Simple one-off forms or legacy migrations |

---

## 4. Which One Should You Choose?

### Choose Controlled Components when:
- You need **real-time validation** (e.g., checking password strength).
- You want to **enable or disable fields** dynamically.
- You need to **reset the form easily** using state.
- Your form values need to affect other UI elements in real time.
- You want a predictable and testable form flow.

### Choose Uncontrolled Components when:
- You only need to **read values on submit**.
- You are **migrating a non-React form** into React.
- You don’t need React to re-render on every keystroke.
- You want **simpler and faster performance** in very large forms.

---

## 5. Best Practices
- Prefer **controlled components** in most cases because they align with React’s philosophy of keeping the UI and state in sync.
- Use **uncontrolled components** when performance and simplicity matter, or when forms do not require real-time validation.


