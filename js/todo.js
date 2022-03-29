const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText ="🎖";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    console.log(paintToDo);
    parsedToDos.forEach((item) =>console.log("this is the turn of", item));

}
