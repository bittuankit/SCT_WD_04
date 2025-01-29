const taskInput = document.getElementById("taskInput");
const submitButton = document.getElementById("submit");
const taskList = document.querySelector(".task");
const addBtn = document.querySelector(".fa-plus");
const todoForm = document.querySelector(".todo-form");

addBtn.addEventListener("click", () => {
  addBtn.classList.toggle("fa-plus-rotate");

  addBtn.classList.contains("fa-plus-rotate")
    ? (todoForm.style.display = "block")
    : (todoForm.style.display = "none");
});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.completed);
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <i class="fa-regular fa-circle-check ${
          task.completed ? "completed" : ""
        }" data-action="toggle" data-index="${index}"></i>
        <i class="fa-solid fa-trash" data-action="delete" data-index="${index}"></i>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
}

taskList.addEventListener("click", (e) => {
  const target = e.target;
  const action = target.dataset.action;
  const index = target.dataset.index;

  if (action === "delete") {
    deleteTask(index);
  } else if (action === "toggle") {
    toggleComplete(index);
  }
});

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

submitButton.addEventListener("click", addTask);

renderTasks();
