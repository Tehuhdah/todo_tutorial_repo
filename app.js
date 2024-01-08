// Selectors

// Selecting form elements using query selector and the elements class.
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
// Event listeners are used to respond to certain events, such as user interactions,
// by executing a specified function. In this case, when the 'click' event is fired on
// the 'todoButton' element, the 'addTodo' function is executed.
todoButton.addEventListener("click", addTodo);

// Functions

function addTodo(event) {
  // Prevents the form from submitting.
  event.preventDefault();
  console.log("hello world!");

  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create li
  const newtoDo = document.createElement("li");
  newtoDo.innerText = todoInput.value;
  newtoDo.classList.add("todo-item");
  todoDiv.appendChild(newtoDo);

  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  // Check mark button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to todo-list
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}
