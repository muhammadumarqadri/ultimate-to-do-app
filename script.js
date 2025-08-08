// DOM Elements
const taskList = document.getElementById("task-list");
const taskTitle = document.getElementById("task-title");
const dueDate = document.getElementById("due-date");
const priority = document.getElementById("priority");
const tag = document.getElementById("tag");
const addTaskBtn = document.getElementById("add-task");
const searchInput = document.getElementById("search");
const showCompleted = document.getElementById("show-completed");
const sortBy = document.getElementById("sort-by");
const themeToggle = document.getElementById("toggle-theme");
const clock = document.getElementById("clock");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Utility Functions
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function formatDateTime(dt) {
  return dt ? new Date(dt).toLocaleString() : 'No Due Date';
}

function getSubtaskProgress(subtasks) {
  if (!subtasks || subtasks.length === 0) return { completed: 0, total: 0, percent: 0 };
  const total = subtasks.length;
  const completed = subtasks.filter(s => s.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percent };
}

function renderSubTasks(subtasks, parentTaskId, level = 1) {
  if (!subtasks || subtasks.length === 0) return '';
  
  return subtasks.map(sub => {
    const nestedHTML = renderSubTasks(sub.subtasks || [], parentTaskId, level + 1);

    return `
      <li class="${sub.completed ? 'completed' : ''}" style="margin-left: ${level * 1.2}rem;">
        <span>${sub.title} ${sub.due ? `<small>⏰ ${formatDateTime(sub.due)}</small>` : ''}</span>
        <div class="sub-task-actions">
          <button onclick="toggleSubTask('${parentTaskId}', '${sub.id}')">✅</button>
          <button onclick="editSubTask('${parentTaskId}', '${sub.id}')">✏️</button>
          <button onclick="deleteSubTask('${parentTaskId}', '${sub.id}')">❌</button>
          <button onclick="addNestedSubTask('${parentTaskId}', '${sub.id}')">➕</button>
        </div>
        <ul>${nestedHTML}</ul>
      </li>
    `;
  }).join('');
}

function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = [...tasks];

  const query = searchInput.value.toLowerCase();
  if (query) {
    filteredTasks = filteredTasks.filter(t => t.title.toLowerCase().includes(query));
  }

  if (!showCompleted.checked) {
    filteredTasks = filteredTasks.filter(t => !t.completed);
  }

  // Sort Logic
  if (sortBy.value === "due") {
    filteredTasks.sort((a, b) => new Date(a.due) - new Date(b.due));
  } else if (sortBy.value === "priority") {
    const levels = { high: 1, medium: 2, low: 3 };
    filteredTasks.sort((a, b) => levels[a.priority] - levels[b.priority]);
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.priority} ${task.completed ? "completed" : ""}`;
    li.setAttribute("draggable", true);

    // Always show collapsible subtasks section
    const { completed, total, percent } = getSubtaskProgress(task.subtasks || []);
    const subtasksHTML = `
      <div class="subtask-toggle" onclick="toggleSubtasks(this)">
        <span class="toggle-icon">▶</span> Subtasks (${completed}/${total})
      </div>
      <ul class="sub-tasks collapsed">
        ${renderSubTasks(task.subtasks || [], task.id)}
      </ul>
      <div class="progress">
        <div class="progress-bar" style="width:${percent}%"></div>
      </div>
      <input type="text" placeholder="Add sub-task..." onkeydown="addSubTaskInput(event, '${task.id}')" class="subtask-input-field" />
    `;

    li.innerHTML = `
     <div class="task-content">
       <strong>${task.title}</strong> 
       <div>${formatDateTime(task.due)} | ${task.tag}</div>
       ${subtasksHTML}
     </div>
     <div class="task-actions">
       <button onclick="toggleComplete('${task.id}')" title="Mark Complete">✅</button>
       <button onclick="editTask('${task.id}')" title="Edit">✏️</button>
       <button onclick="deleteTask('${task.id}')" title="Delete">❌</button>
     </div>
    `;

    // Drag and Drop Events
    li.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", task.id);
    });
    li.addEventListener("dragover", e => e.preventDefault());
    li.addEventListener("drop", e => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("text/plain");
      const fromIndex = tasks.findIndex(t => t.id === draggedId);
      const toIndex = tasks.findIndex(t => t.id === task.id);
      if (fromIndex !== -1 && toIndex !== -1) {
        [tasks[fromIndex], tasks[toIndex]] = [tasks[toIndex], tasks[fromIndex]];
        saveTasks();
        renderTasks();
      }
    });

    taskList.appendChild(li);
  });
}

// Task Actions
function addTask() {
  const title = taskTitle.value.trim();
  if (!title) return alert("Task title required!");

  const newTask = {
    id: generateID(),
    title,
    due: dueDate.value,
    priority: priority.value,
    tag: tag.value || '',
    completed: false,
    subtasks: [],
    created: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  
  // Clear form
  taskTitle.value = "";
  dueDate.value = "";
  tag.value = "";
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newTitle = prompt("Edit title:", task.title);
  if (newTitle) {
    task.title = newTitle;
    saveTasks();
    renderTasks();
  }
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Add subtask using input field (Enter key)
function addSubTaskInput(event, taskId) {
  if (event.key === 'Enter') {
    const title = event.target.value.trim();
    if (!title) return;

    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (!task.subtasks) task.subtasks = [];

    task.subtasks.push({
      id: generateID(),
      title,
      due: '',
      completed: false,
      subtasks: []
    });

    event.target.value = '';
    saveTasks();
    renderTasks();
  }
}

// Remove the addSubTaskPrompt function since we're using input field instead

function toggleSubTask(taskId, subId) {
  const task = tasks.find(t => t.id === taskId);
  const sub = task.subtasks.find(s => s.id === subId);
  sub.completed = !sub.completed;
  saveTasks();
  renderTasks();
}

function editSubTask(taskId, subId) {
  const task = tasks.find(t => t.id === taskId);
  const sub = task.subtasks.find(s => s.id === subId);
  const newTitle = prompt("Edit sub-task:", sub.title);
  if (newTitle) {
    sub.title = newTitle;
    saveTasks();
    renderTasks();
  }
}

function deleteSubTask(taskId, subId) {
  const task = tasks.find(t => t.id === taskId);
  task.subtasks = task.subtasks.filter(s => s.id !== subId);
  saveTasks();
  renderTasks();
}

function addNestedSubTask(taskId, subTaskId) {
  const title = prompt("Enter sub-sub-task title:");
  if (!title) return;

  const task = tasks.find(t => t.id === taskId);

  function findSubtask(subs, id) {
    for (let s of subs) {
      if (s.id === id) return s;
      if (s.subtasks && s.subtasks.length) {
        const found = findSubtask(s.subtasks, id);
        if (found) return found;
      }
    }
    return null;
  }

  const parentSub = findSubtask(task.subtasks, subTaskId);
  if (parentSub) {
    if (!parentSub.subtasks) parentSub.subtasks = [];
    parentSub.subtasks.push({
      id: generateID(),
      title,
      due: '',
      completed: false,
      subtasks: []
    });
    saveTasks();
    renderTasks();
  }
}

// Collapsible Subtasks Toggle Function
function toggleSubtasks(element) {
  const toggleIcon = element.querySelector('.toggle-icon');
  const subtasksList = element.nextElementSibling;
  
  if (subtasksList.classList.contains('collapsed')) {
    subtasksList.classList.remove('collapsed');
    toggleIcon.textContent = '▼';
  } else {
    subtasksList.classList.add('collapsed');
    toggleIcon.textContent = '▶';
  }
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Clock Update
function updateClock() {
  const now = new Date();
  if (clock) {
    clock.textContent = now.toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
searchInput.addEventListener("input", renderTasks);
showCompleted.addEventListener("change", renderTasks);
sortBy.addEventListener("change", renderTasks);

// Allow Enter key to add task
taskTitle.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Initialize
renderTasks();