# React Practice Question: Building a Task Tracker

## Problem Statement

You are tasked with building a **Task Tracker** using `useState` and `useEffect`. The list of tasks starts out already defined in your code 
### Requirements:

1. **TaskTracker component**: Create a component called `TaskTracker` that:
   - Starts with an array of at least 4 hardcoded tasks in state, each shaped like `{ id: 1, text: "Walk the dog", completed: false }`.
   - Renders every task in the list, each showing:
     - A button that toggles that task's `completed` value between `true` and `false` (label it "Mark Done" / "Mark Undone", or similar).
     - A "Remove" button that removes just that task from the list.

2. **Adding a task without a text input**:
   - Keep a second hardcoded array of a few "extra" tasks in your code (not shown on screen).
   - Add a single "Add Task" button above the list. Each time it's clicked, take the next task from that extra array and add it to the tracked list.
   - This is just practice moving data into state with a button click — no typing required.

3. **useEffect requirement**:
   - Use `useEffect` to update the browser tab title to show how many tasks are still **not completed** — e.g. `"3 tasks left"`.
   - It should update automatically whenever the task list changes (task added, removed, or toggled) — no manual step required.

---

### Acceptance Criteria:

- **State**:
  - The task list is stored in state using `useState`, not a regular variable.
  - Adding, removing, and toggling a task all correctly update state, without mutating the array directly (build a new array each time).

- **useEffect**:
  - The document title correctly reflects the number of incomplete tasks.
  - It updates automatically when tasks are added, removed, or toggled — you should not need to write separate code elsewhere to keep the title in sync.

- **No Errors**:
  - No console errors or warnings.
  - Each rendered task has a proper unique `key`.

---

### Bonus (if you finish early):

- Disable the "Add Task" button (or hide it) once you've added every task from the extra array.
- Show a message like "All done!" when every task in the list is completed.
- Show a message like "No tasks yet — add one above!" when the list is empty.