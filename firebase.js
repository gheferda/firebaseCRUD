import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
/*FIRESTORE DATABASE*/
 import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';
 /*REALTIME DATABASE*/
 import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js';
 
/*FIREBASE CONFIG*/
const firebaseConfig = {
  apiKey: "AIzaSyBg0dLmPT-UwWriQw-iK_4AKJLeVNhwRfs",
  authDomain: "crud-app-8aede.firebaseapp.com",
  projectId: "crud-app-8aede",
  storageBucket: "crud-app-8aede.appspot.com",
  messagingSenderId: "949411850095",
  appId: "1:949411850095:web:08684b7a218f9955ddea9a",
  measurementId: "G-S3D1KBWYJS"
};
/*REALTIME DATABASE*/
const appSettings = {
  projectId: "crud-app-8aede",
  databaseURL: "https://crud-app-8aede-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const todosInDB = ref(database, "todoList")

const todoForm = document.getElementById("todo-form")
const inputField = document.getElementById("input")
const todoList = document.getElementById("todo-list")

/*ADD TODO TO FIREBASE*/
todoForm.addEventListener("submit", function(e) {
  e.preventDefault()
  let inputValue = inputField.value
  
  if(inputValue==""){
    alert("input is empty")
  }else{
    /*PUSH DATA TO REALTIMEDB*/
    push(todosInDB, inputValue)
    //creatEl(inputValue)
    //createList(inputValue)
  inputField.value = "";
  }
});

const fetchData = () => {
  /*FETCH DATA USING ONVALUE*/
onValue(todosInDB, function(snapshot){
  if(snapshot.exists()) {
    /*keys, values, entries*/
  let todosArray = Object.entries(snapshot.val())
  console.log("realtime",todosArray)
/*VIEW RECORD ON REALTIMEDB*/
 clearList()
 let lastTodo = ""

  for(let i=0; i<todosArray.length; i++){
 let todoCurrent = todosArray[i]
 let todoCurrentId = todoCurrent[0]
 let todoCurrentValue = todoCurrent[1]
 lastTodo = todosArray[todosArray.length -1]
 
    viewList(todoCurrent)
 // console.log(todoCurrent)
  }
  console.log(lastTodo) 
  } else {
    todoList.innerHTML = "no record yet"
  }
  });/*END OF FETCH ONVALUE*/
}/* END OF FETCH DATA RENDER*/

/*VIEW REALTIMEDB FROM FIREBASE*/
const viewList = (item) => {
  /*todoList.innerHTML += 
  `<li>${todo}</li>`*/
  let itemId = item[0]
  let itemValue = item[1]
  let li = document.createElement("li")
  li.textContent = itemValue
  let del = document.createElement("button")
  del.textContent = "DELETE"
  let div = document.createElement("div")
  
  /*DEL DATA ON REALTIMEDB*/
  del.addEventListener("click", function(){
  let todosInDBexact = ref(database, `todoList/${itemId}`)
    
    remove(todosInDBexact)
    //console.log(todosInDBexact)
  })
  
  div.append(li, del)
  todoList.append(div)
}
/*CREATE LI ELEMENT*/
const creatEl = (todo) => {
  let li = document.createElement("li")
      li.textContent = todo
      todoList.appendChild(li)
};
function clearList() {
  todoList.innerHTML = ""
};








window.onload = fetchData();
export { app, collection, getDocs, getDatabase, ref, push };
