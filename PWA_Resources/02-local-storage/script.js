// Register service worker
if ("serviceWorker" in navigator) {
  // checking if the browser supports service workers
  window.addEventListener("load", function () {
    // when app loads, fire callback
    navigator.serviceWorker.register("/sw.js").then(
      function () {
        // register sw
        console.log("ServiceWorker registration successful"); // registration was successful
      },
      function (err) {
        console.log("ServiceWorker registration failed", err); // registration failed
      }
    );
  });
}

// Get DOM elements
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");

// Side Effects / Lifecycle
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todoData = [];

existingTodos.forEach((todo) => {
  addTodo(todo);
});

function addTodo(todoText) {
  todoData.push(todoText);
  const li = document.createElement("li");
  li.innerHTML = todoText;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
  input.value = "";
}

// Events
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
};

// Got this code from fireship-io -> https://github.com/fireship-io/10-javascript-frameworks/blob/main/vanilla-app/index.html
