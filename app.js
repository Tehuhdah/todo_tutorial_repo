// Selectors

// Selecting form elements using query selector and the elements class.
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
// Event listeners are used to respond to certain events, such as user interactions,
// by executing a specified function.

// When the 'click' event is fired on the 'todoButton' element, the 'addTodo' function is executed.
todoButton.addEventListener("click", addTodo);

// When the 'click' event is fired on the 'todoList' element, the 'delectCheck' function is executed.
todoList.addEventListener("click", deleteCheck);
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

function deleteCheck(e) {
  // Using .target can allow you to see what inputs are targeted when clicked.
  // console.log(e.target);

  const item = e.target;

  // Delete toDo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // Animation
    todo.classList.add("fall");

    // Use addEventListener so that when the user clicks on delete, the animation/transition
    // occurs first before deleted the todo div.
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check mark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
