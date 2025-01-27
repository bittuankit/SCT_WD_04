const addIcon = document.querySelector(".fa-plus");
const todoForm = document.querySelector(".todo-form");
const checkIcon = document.querySelectorAll(".fa-circle-check");
const todo = document.querySelectorAll(".task li");
const trashBtn = document.querySelector(".task li .fa-trash");

console.log(todo);

addIcon.addEventListener("click", () => {
  addIcon.classList.toggle("fa-plus-rotate");
  addIcon.classList.contains("fa-plus-rotate")
    ? (todoForm.style.display = "block")
    : (todoForm.style.display = "none");
});

checkIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("fa-solid");
  });
});

todo.forEach((task) => {
  task.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
      task.style.display = "none";
    }

    if (e.target.classList.contains("fa-solid")) {
      e.target.style.color = "greenyellow";
      task.style.textDecoration = "line-through";
    } else {
      e.target.style.color = "#fefae0";
      task.style.textDecoration = "none";
    }
  });
});
