const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");
const themeBtn = document.getElementById("themeBtn");
const clearAll = document.getElementById("clearAll");
const clearCompleted = document.getElementById("clearCompleted");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  const visibleTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  visibleTasks.forEach(task => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = task.text;

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, span, del);
    taskList.appendChild(li);
  });

  emptyState.style.display = visibleTasks.length ? "none" : "block";
  const remaining = tasks.filter(task => !task.completed).length;
  taskCount.textContent = `${remaining} active task${remaining === 1 ? "" : "s"}`;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    error.textContent = "Please enter a task before adding it.";
    input.focus();
    return;
  }

  if (tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) {
    error.textContent = "This task already exists.";
    return;
  }

  tasks.push({ id: Date.now(), text, completed: false });
  saveTasks();
  renderTasks();
  input.value = "";
  error.textContent = "";
  input.focus();
});

function toggleTask(id) {
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

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
});

clearAll.addEventListener("click", () => {
  if (tasks.length && confirm("Delete all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode" : "🌙 Dark Mode";
});

renderTasks();
