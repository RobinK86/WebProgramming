// ===============================
// Portfolio To-Do List (Week 8)
// Extended for Assignment 8
// ===============================


// ---------- 1) DOM SELECTION ----------

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

const totalCountEl = document.getElementById("totalCount");
const doneCountEl = document.getElementById("doneCount");

const clearCompletedBtn = document.getElementById("clearCompleted");
const clearAllBtn = document.getElementById("clearAll");

const filterButtons = document.querySelectorAll(".filters .btn");

const searchInput = document.getElementById("searchInput");
const charCount = document.getElementById("charCount");
const emptyMessage = document.getElementById("emptyMessage");


// ---------- 2) APP STATE ----------

// Each task object now stores:
// {
//   id: 123,
//   text: "Buy milk",
//   done: false,
//   timestamp: "3:45 PM"
// }
let tasks = [];
let currentFilter = "all";
let currentSearch = "";


// ---------- 3) LOCAL STORAGE HELPERS ----------

const STORAGE_KEY = "portfolio_todo_tasks";

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  tasks = JSON.parse(saved);
}


// ---------- 4) VALIDATION HELPERS ----------

function showError(message) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = "";
}


// ---------- 5) SMALL HELPER FUNCTIONS ----------

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function updateAddButton() {
  if (input.value.trim() === "") {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
}

function updateCharCount() {
  charCount.textContent = "Characters: " + input.value.length;
}

function updateCounts() {
  const total = tasks.length;
  const completed = tasks.filter(function (task) {
    return task.done;
  }).length;

  totalCountEl.textContent = "Total: " + total;
  doneCountEl.textContent = "Completed: " + completed;
}

function passesFilter(task) {
  if (currentFilter === "all") return true;
  if (currentFilter === "active") return !task.done;
  if (currentFilter === "completed") return task.done;
  return true;
}

function passesSearch(task) {
  if (currentSearch === "") return true;

  return task.text.toLowerCase().includes(currentSearch.toLowerCase());
}

function updateEmptyMessage() {
  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

function taskExists(text, ignoreId) {
  for (const task of tasks) {
    if (task.text.toLowerCase() === text.toLowerCase()) {
      if (ignoreId === undefined || task.id !== ignoreId) {
        return true;
      }
    }
  }

  return false;
}


// ---------- 6) RENDERING ----------

function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.dataset.id = task.id;

  const textBox = document.createElement("div");
  textBox.classList.add("task-text-box");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = task.text;

  if (task.done) {
    span.classList.add("done");
  }

  span.addEventListener("click", function () {
    task.done = !task.done;
    saveTasks();
    render();
  });

  const timeEl = document.createElement("small");
  timeEl.classList.add("task-time");
  timeEl.textContent = "Added at " + task.timestamp;

  const btnBox = document.createElement("div");
  btnBox.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "ghost", "small");

  editBtn.addEventListener("click", function () {
    let updatedText = prompt("Edit task:", task.text);

    if (updatedText === null) {
      return;
    }

    updatedText = updatedText.trim();

    if (updatedText === "") {
      showError("Task cannot be empty.");
      return;
    }

    if (taskExists(updatedText, task.id)) {
      showError("Task already exists.");
      return;
    }

    task.text = updatedText;
    clearError();
    saveTasks();
    render();
  });

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.textContent = "Delete";
  delBtn.classList.add("btn", "danger", "small");

  delBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (t) {
      return t.id !== task.id;
    });

    saveTasks();
    render();
  });

  textBox.appendChild(span);
  textBox.appendChild(timeEl);

  btnBox.appendChild(editBtn);
  btnBox.appendChild(delBtn);

  li.appendChild(textBox);
  li.appendChild(btnBox);

  return li;
}

function render() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    if (passesFilter(task) && passesSearch(task)) {
      const li = createTaskElement(task);
      taskList.appendChild(li);
    }
  }

  updateCounts();
  updateEmptyMessage();
}


// ---------- 7) EVENTS ----------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    showError("Task cannot be empty.");
    return;
  }

  if (taskExists(text)) {
    showError("Task already exists.");
    return;
  }

  clearError();

  const newTask = {
    id: Date.now(),
    text: text,
    done: false,
    timestamp: getTimeStamp()
  };

  tasks.push(newTask);
  saveTasks();

  input.value = "";
  updateCharCount();
  updateAddButton();

  render();
});

input.addEventListener("input", function () {
  updateCharCount();
  updateAddButton();

  if (input.value.trim() !== "") {
    clearError();
  }
});

searchInput.addEventListener("input", function () {
  currentSearch = searchInput.value.trim();
  render();
});

clearCompletedBtn.addEventListener("click", function () {
  tasks = tasks.filter(function (task) {
    return !task.done;
  });

  saveTasks();
  render();
});

clearAllBtn.addEventListener("click", function () {
  const confirmed = confirm("Are you sure you want to delete all tasks?");

  if (confirmed) {
    tasks = [];
    saveTasks();
    render();
  }
});

for (const btn of filterButtons) {
  btn.addEventListener("click", function () {
    currentFilter = btn.dataset.filter;

    for (const b of filterButtons) {
      b.classList.remove("active");
    }

    btn.classList.add("active");
    render();
  });
}


// ---------- 8) INIT ----------

loadTasks();
updateCharCount();
updateAddButton();
render();