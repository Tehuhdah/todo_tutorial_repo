// Selectors

// Selecting form elements using query selector and the elements class.
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
// Event listeners are used to respond to certain events, such as user interactions,
// by executing a specified function.

// When the 'click' event is fired on the 'todoButton' element, the 'addTodo' function is executed.
todoButton.addEventListener("click", addTodo);

// When the 'click' event is fired on the 'todoList' element, the 'delectCheck' function is executed.
todoList.addEventListener("click", deleteCheck);

// When the 'click' event is fired on the 'filterOption' element, the 'filterToDo' function is executed.
filterOption.addEventListener("click", filterToDo);

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

// The deleteCheck function handles the deletion and completion of todo items.
// It takes an event object as a parameter, which is generated when a user interacts with the todo items.
function deleteCheck(e) {
  // The target property of the event object is used to reference the HTML element that was interacted with.
  const item = e.target;

  // Delete toDo
  // If the clicked item has a class of "trash-btn", it's a delete button.
  if (item.classList[0] === "trash-btn") {
    // The parent element of the delete button is the todo item itself.
    const todo = item.parentElement;

    // Animation
    // Add the "fall" class to the todo item to trigger a delete animation.
    todo.classList.add("fall");

    // After the animation ends, remove the todo item from the DOM.
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check Mark
  // If the clicked item has a class of "completed-btn", it's a completion button.
  if (item.classList[0] === "completed-btn") {
    // The parent element of the completion button is the todo item itself.
    const todo = item.parentElement;

    // Toggle the "completed" class on the todo item to mark it as completed or uncompleted.
    todo.classList.toggle("completed");
  }
}
// This function is used to filter the todos based on their completion status.
function filterToDo(e) {
  // Get all the child nodes of the todoList, which are the individual todo items.
  const todos = todoList.childNodes;

  // Iterate over each todo item.
  todos.forEach((todo) => {
    // The value of the target element determines the filter condition.
    switch (e.target.value) {
      // If the value is "all", display all todo items.
      case "all":
        todo.style.display = "flex";
        break;
      // If the value is "completed", display only the todo items that have the "completed" class.
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      // If the value is "uncompleted", display only the todo items that do not have the "completed" class.
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
