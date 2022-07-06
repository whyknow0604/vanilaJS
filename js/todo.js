const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const parent = event.target.parentElement;
    const parentId = parent.id;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentId));
    parent.remove();
    saveToDos();
}
function getToDos(){
    if (localStorage.getItem("todos") !== null){
        const localTodos = JSON.parse(localStorage.getItem("todos"));
        toDos = localTodos;
        localTodos.forEach(paintToDo);
    }
}

getToDos();
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.addEventListener("click",deleteToDo);
    button.innerText = "X";
    span.innerText = newTodo.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);