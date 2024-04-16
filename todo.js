/*const todoForm = document.getElementById("todo-form");
const input = document.getElementById("input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let todoInput = input.value
  if (todoInput==="") {
    alert("empty")
    return;
  }

  addNew(todoInput)
  input.value = ""
});

const addNew = (todo) => {
  /*Add new record*/
 /* const listItem = document.createElement("li");
  listItem.textContent = todo
  
  /*Delete record*/
 /* const delBtn = document.createElement("button");
  delBtn.textContent = "Delete"
  listItem.appendChild(delBtn)
  
delBtn.addEventListener('click', function() {
  todoList.removeChild(listItem)
});

  todoList.appendChild(listItem)
};