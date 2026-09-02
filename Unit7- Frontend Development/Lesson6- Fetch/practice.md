

## Objective

Create a **custom React hook** named `useFetchData` that fetches data from a public API and properly manages the **loading**, **error**, and **data** states. Then, use this hook inside a component to display the fetched data and handle all states gracefully.

---

## Requirements

### 1. Custom Hook (`useFetchData`)
- Must accept a **URL string** as its first parameter.
- Must **return an object** with the following keys:
  - `data`: the parsed response from the API
  - `loading`: boolean representing loading state
  - `error`: string or object representing the error (if any)
- The hook should handle network requests properly
- The hook must handle all lifecycle concerns correctly using `useEffect`.

### 2. API Data Source
- Use a **public API** like:
  - JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts`)
  - or any open JSON API.
- Fetch and display a list of items (e.g. posts, users, etc.).

### 3. Component Usage
- Create a functional component (e.g., `PostList`) that uses the `useFetchData` hook.
- The component should:
  - Display `"Loading..."` while the data is being fetched
  - Show an error message if the request fails
  - Render a list of items once data is successfully fetched

### 4. UX Behavior
- The loading state should be visible **for at least 1 second**, even if the request finishes faster.
- Errors should be clearly communicated (e.g., via a visible message).
- The component must not crash under any condition.

---

## Acceptance Criteria

- [ ] The hook is reusable and does not hard-code any specific API.
- [ ] The hook correctly manages and returns `loading`, `error`, and `data` states.
- [ ] The hook introduces a **visible loading delay** (at least 1 second).
- [ ] The component uses the hook and renders data correctly.
- [ ] Loading state is shown while data is being fetched.
- [ ] Error state is shown when API fails.
- [ ] Data is displayed once the fetch is successful.
- [ ] Code follows good practices (clear separation of logic, meaningful variable names).

---

## Bonus
- [ ] Add a **retry button** to refetch data on error.
- [ ] Make the delay duration configurable via the hook.
- [ ] Display a message if the fetched data is empty.

---
