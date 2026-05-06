const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];
let currentFilter = "all";

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (text === "") {
    alert("Task cannot be empty");
    return;
  }

  const task = {
    id: Date.now(),
    text,
    priority,
    completed: false
  };

  tasks.push(task);

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  let filtered = tasks;

  if (currentFilter === "active") {
    filtered = tasks.filter(t => !t.completed);
  } else if (currentFilter === "completed") {
    filtered = tasks.filter(t => t.completed);
  }

  filtered.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${task.completed ? "line-through" : "none"}">
        ${task.text} (${task.priority})
      </span>
      <button onclick="toggleTask(${task.id})">✔</button>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;

    taskList.appendChild(li);
  });

  taskCount.textContent = `Total: ${tasks.length}`;

}function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  saveTasks();
  renderTasks();
}

function filterTasks(filter) {
  currentFilter = filter;
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem("tasks");

  if (data) {
    tasks = JSON.parse(data);
  }

  renderTasks();
}

loadTasks();