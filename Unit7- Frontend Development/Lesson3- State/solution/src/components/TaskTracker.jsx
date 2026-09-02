import { useState, useEffect } from "react";

// Starting tasks - already in state from the beginning
const initialTasks = [
  { id: 1, text: "Walk the dog", completed: false },
  { id: 2, text: "Do the dishes", completed: false },
  { id: 3, text: "Finish React homework", completed: true },
  { id: 4, text: "Buy groceries", completed: false },
];

// Extra tasks pulled in one at a time when "Add Task" is clicked
const extraTasks = [
  { id: 5, text: "Read a book", completed: false },
  { id: 6, text: "Clean the garage", completed: false },
  { id: 7, text: "Call mom", completed: false },
];

function TaskTracker() {
  const [tasks, setTasks] = useState(initialTasks);
  const [nextExtraIndex, setNextExtraIndex] = useState(0);

  // useEffect: update document title whenever tasks change
  useEffect(() => {
    const incompleteCount = tasks.filter((task) => !task.completed).length;
    document.title = `${incompleteCount} tasks left`;
  }, [tasks]);

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    if (nextExtraIndex < extraTasks.length) {
      const taskToAdd = extraTasks[nextExtraIndex];
      setTasks((prevTasks) => [...prevTasks, taskToAdd]);
      setNextExtraIndex((prevIndex) => prevIndex + 1);
    }
  };

  const allExtraTasksAdded = nextExtraIndex >= extraTasks.length;
  const allTasksCompleted =
    tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>

      <button onClick={handleAddTask} disabled={allExtraTasksAdded}>
        {allExtraTasksAdded ? "No More Tasks to Add" : "Add Task"}
      </button>

      {tasks.length === 0 && (
        <p className="empty-message">No tasks yet — add one above!</p>
      )}

      {allTasksCompleted && (
        <p className="done-message">All done! 🎉</p>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="task-buttons">
              <button onClick={() => handleToggle(task.id)}>
                {task.completed ? "Mark Undone" : "Mark Done"}
              </button>
              <button onClick={() => handleRemove(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;