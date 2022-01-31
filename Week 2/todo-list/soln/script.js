const newTodoForm = document.getElementById("newTodoForm");
const newTodo = document.getElementById("newTodo");
let list = [];

const todoContainer = document.getElementById("todoContainer");

newTodoForm.onsubmit = (e) => {
  e.preventDefault();

  createTodo(newTodo.value);
  newTodo.value = "";
};

const createTodo = (value) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", (e) => {
    e.target.parentElement.remove();
  });

  const val = document.createElement("div");
  val.innerHTML = value;
  todo.appendChild(checkbox);
  todo.appendChild(val);
  todoContainer.appendChild(todo);

  // <div class="todo">
  //   <input type="checkbox" name="check">
  //   <div >
  //     Prepare exercises for Illuminate
  //   </div>
  // </div>
};

var today = new Date();
today.toISOString().substring(0, 10);

const date = document.getElementById("date");
date.innerHTML = today.toDateString();
