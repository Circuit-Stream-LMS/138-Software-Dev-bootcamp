# State & Hooks Guide (useState + useEffect)

## How React Renders

A React component is a function that React calls whenever it needs to figure out what should appear on screen. Each time it's called, the function runs from top to bottom and returns JSX describing the UI. React compares this to what's currently displayed and updates only what changed.

**Rendering means calling the component function again** — not updating existing values in place.

### Why a plain variable doesn't work for changing data
- A normal variable declared inside a component is created fresh every time the function runs.
- Any change made to it during one render is lost by the next render.
- Even if it weren't lost, changing a plain variable doesn't tell React to re-render — React only re-renders in response to specific triggers.

This is the gap that state is designed to fill.

---

## What is State?

State is data that a component stores and that persists across renders. Unlike a plain variable, updating state does two things:

1. Saves the new value so it's available on the next render.
2. Tells React to re-render the component with that new value.

Nothing on screen updates unless a state setter is called (or a parent re-renders the component). This is why clicking a button that only changes a plain variable has no visible effect — the data changed, but React was never told to look again.

---

## useState

`useState` is a **hook** — a function that lets a function component use React features like state. Hook names always start with `use`.

```jsx
const [value, setValue] = useState(initialValue);
```

- Returns an array with exactly two items: the current value, and a function to update it.
- Array destructuring is used to name these two items whatever you like.
- `initialValue` is only used on the first render.

### Why state updates create a new array/object instead of editing the old one
React decides whether to re-render by comparing the *reference* of the new state value to the old one, not by checking every property inside it. Mutating an array or object in place keeps the same reference, so React doesn't detect a change even though the contents changed. Creating a new array or object instead (e.g. `[...items, newItem]`) gives React a new reference to compare, so it knows to re-render.

### Rules of Hooks
- Only call hooks at the top level of a component — not inside `if` statements, loops, or nested functions.
- Only call hooks from React function components (or other hooks) — not regular JS functions.

---

## Lifting State Up & Prop Drilling

React data flows in one direction: from parent to child, through props. A child has no way to pass data back up to a parent directly.

Because of this, if two components need access to the same piece of data, that data can't live inside either component individually — it has to live in their closest common ancestor, and get passed down from there. This is called **lifting state up**.

Passing state (or a function that updates it) down through several layers of components — including components that don't use it themselves and are only forwarding it along — is called **prop drilling**. It's a normal, expected pattern for a small number of levels, and only becomes cumbersome once a component tree gets deep. `useContext`, covered in a later class, is React's way of avoiding it.

---

## useEffect

`useEffect` lets a component run code after it renders — typically to interact with something outside of React, such as the browser, an API, or a timer. This is called a **side effect**.

```jsx
useEffect(() => {
  // runs after the component renders
}, [dependencies]);
```

### Why side effects are kept separate from rendering
Rendering is meant to be a predictable translation from state and props into UI, with no other consequences. React needs to be free to call a component function as often as needed without that causing side effects in the outside world. `useEffect` keeps rendering itself clean by giving side effects a separate place to run, after rendering is done.

### The dependency array
| Array passed | When the effect runs |
|---|---|
| Not provided | After every render |
| `[]` | Once, after the first render only |
| `[value]` | After the first render, and again whenever `value` changes |

The dependency array exists so an effect only re-runs when something it actually depends on has changed, instead of on every render.

### Cleanup
If an effect sets up something ongoing — a timer, a subscription — it should return a cleanup function. React calls this before the effect runs again, and when the component is removed from the screen.

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer);
}, []);
```

---

## Summary

| Concept | What it solves |
|---|---|
| State | Data that needs to persist across renders and trigger a re-render when changed |
| Lifting state up | State needed by multiple components has to live in their common ancestor |
| Prop drilling | The cost of passing that state down through components that don't use it directly |
| useEffect | Running code that reaches outside of React, kept separate from rendering |
| Dependency array | Controls how often an effect re-runs |
