const STORAGE_KEY = "lista-tareas-js:v2";
const LEGACY_STORAGE_KEY = "tareas";
const THEME_KEY = "lista-tareas-js:theme";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const clearCompleted = document.getElementById("clearCompleted");
const filterButtons = document.querySelectorAll(".filter-button");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const toast = document.getElementById("toast");

let tasks = loadTasks();
let currentFilter = "all";
let editingTaskId = null;
let toastTimeout;

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (Array.isArray(savedTasks)) {
      return savedTasks;
    }

    const legacyTasks = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));

    if (Array.isArray(legacyTasks)) {
      const migratedTasks = legacyTasks.map((text) => ({
        id: createId(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
      }));

      localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedTasks));
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      return migratedTasks;
    }

    return [];
  } catch (error) {
    console.error("No se pudieron cargar las tareas", error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createId() {
  const randomUUID = window.crypto && window.crypto.randomUUID;
  return randomUUID ? randomUUID.call(window.crypto) : `${Date.now()}-${Math.random()}`;
}

function normalizeText(text) {
  return text.trim().replace(/\s+/g, " ");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

function addTask(text) {
  const repeatedTask = tasks.some((task) => task.text.toLowerCase() === text.toLowerCase());

  if (repeatedTask) {
    showToast("Esa tarea ya existe 👀");
    return;
  }

  const task = {
    id: createId(),
    text,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.unshift(task);
  saveTasks();
  renderTasks();
  showToast("Tarea agregada ✨");
}

function deleteTask(id) {
  const item = document.querySelector(`[data-id="${id}"]`);

  if (item) {
    item.classList.add("removing");
    item.addEventListener("animationend", () => {
      tasks = tasks.filter((task) => task.id !== id);
      saveTasks();
      renderTasks();
      showToast("Tarea eliminada 🗑️");
    }, { once: true });
    return;
  }

  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  let completedNow = false;

  tasks = tasks.map((task) => {
    if (task.id !== id) return task;
    completedNow = !task.completed;
    return { ...task, completed: completedNow };
  });

  saveTasks();
  renderTasks();

  if (completedNow) {
    celebrate();
    showToast("Tarea completada 🔥");
  }
}

function startEditing(id) {
  editingTaskId = id;
  renderTasks();

  const editInput = document.querySelector(`[data-id="${id}"] .edit-input`);
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

function saveEditedTask(id) {
  const editInput = document.querySelector(`[data-id="${id}"] .edit-input`);
  const newText = normalizeText(editInput ? editInput.value : "");

  if (!newText) {
    showToast("La tarea no puede quedar vacía ⚠️");
    return;
  }

  const repeatedTask = tasks.some((task) => (
    task.id !== id && task.text.toLowerCase() === newText.toLowerCase()
  ));

  if (repeatedTask) {
    showToast("Ya tienes una tarea con ese texto 👀");
    return;
  }

  tasks = tasks.map((task) => (
    task.id === id ? { ...task, text: newText } : task
  ));

  editingTaskId = null;
  saveTasks();
  renderTasks();
  showToast("Tarea actualizada 🛠️");
}

function cancelEditing() {
  editingTaskId = null;
  renderTasks();
}

function clearDoneTasks() {
  const completedCount = tasks.filter((task) => task.completed).length;

  if (completedCount === 0) {
    showToast("No hay tareas completadas todavía 👀");
    return;
  }

  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
  showToast("Completadas eliminadas 🧹");
}

function getFilteredTasks() {
  if (currentFilter === "pending") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function updateStats() {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  totalTasks.textContent = tasks.length;
  pendingTasks.textContent = pending;
  completedTasks.textContent = completed;
  progressLabel.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
}

function renderTasks() {
  const filteredTasks = getFilteredTasks();
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item${task.completed ? " completed" : ""}`;
    li.dataset.id = task.id;

    if (editingTaskId === task.id) {
      renderEditableTask(li, task);
    } else {
      renderReadableTask(li, task);
    }

    taskList.appendChild(li);
  });

  emptyState.classList.toggle("hidden", filteredTasks.length > 0);
  updateStats();
}

function renderReadableTask(li, task) {
  li.innerHTML = `
    <button class="checkbox" type="button" aria-label="Marcar tarea como ${task.completed ? "pendiente" : "completada"}">
      ${task.completed ? "✓" : ""}
    </button>
    <span class="task-text"></span>
    <div class="actions">
      <button class="icon-button edit" type="button" aria-label="Editar tarea">✏️</button>
      <button class="icon-button delete" type="button" aria-label="Eliminar tarea">🗑️</button>
    </div>
  `;

  li.querySelector(".task-text").textContent = task.text;
  li.querySelector(".checkbox").addEventListener("click", () => toggleTask(task.id));
  li.querySelector(".edit").addEventListener("click", () => startEditing(task.id));
  li.querySelector(".delete").addEventListener("click", () => deleteTask(task.id));
}

function renderEditableTask(li, task) {
  li.innerHTML = `
    <span class="checkbox" aria-hidden="true">✏️</span>
    <input class="edit-input" type="text" maxlength="80" />
    <div class="actions">
      <button class="icon-button save" type="button" aria-label="Guardar cambios">✅</button>
      <button class="icon-button cancel" type="button" aria-label="Cancelar edición">✖️</button>
    </div>
  `;

  const editInput = li.querySelector(".edit-input");
  editInput.value = task.text;
  editInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveEditedTask(task.id);
    if (event.key === "Escape") cancelEditing();
  });

  li.querySelector(".save").addEventListener("click", () => saveEditedTask(task.id));
  li.querySelector(".cancel").addEventListener("click", cancelEditing);
}

function setFilter(filter) {
  currentFilter = filter;
  editingTaskId = null;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  renderTasks();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem(THEME_KEY, theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(savedTheme || (prefersLight ? "light" : "dark"));
}

function celebrate() {
  for (let index = 0; index < 16; index += 1) {
    const piece = document.createElement("span");
    const x = `${Math.random() * 240 - 120}px`;
    const y = `${Math.random() * -180 - 60}px`;

    piece.className = "confetti";
    piece.style.setProperty("--x", x);
    piece.style.setProperty("--y", y);
    piece.style.left = `${50 + Math.random() * 10 - 5}%`;
    piece.style.background = index % 2 === 0 ? "var(--primary)" : "var(--accent)";
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = normalizeText(taskInput.value);

  if (!text) {
    showToast("Escribe una tarea primero ⚠️");
    taskInput.focus();
    return;
  }

  addTask(text);
  taskInput.value = "";
  taskInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

clearCompleted.addEventListener("click", clearDoneTasks);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "dark";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

loadTheme();
renderTasks();
