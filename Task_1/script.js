//GLOBAL VARIABLES --------------------------------------------------------------
const ALL_TODOS = [];

//FUNCTION DECLARATIONS-----------------------------------------------------------

function displayAllTodos() {
    todoListContainer.innerHTML = "";

    if (ALL_TODOS.length) {
        const empty = document.querySelector(".empty");
        empty.style.display = "none";
    }

    let identifier = 0;
    for (const item of ALL_TODOS) {
        const todo = document.createElement("li");
        todo.setAttribute("id", `todo-${identifier}`);
        todo.innerHTML =
            "<section class='single-todo' ><input disabled id='" +
            identifier +
            "'> <button onclick='markTodo(" +
            identifier +
            ")'>Done</button> <button onclick='deleteTodo(" +
            identifier +
            ")'>Delete</button></section>";
        todo.children[0].children[0].value = item;
        todoListContainer.appendChild(todo);
        identifier++;
    }
}

function addTodo() {
    const input = document.querySelector("input");
    const newTodo = input.value;
    ALL_TODOS.push(newTodo);
    console.log(ALL_TODOS);
    input.value = "";
    displayAllTodos();
}

function deleteTodo(id) {
    ALL_TODOS.splice(id, 1);
    displayAllTodos();
}

function markTodo(id) {
    const todo = document.querySelector(`#todo-${id}`);
    console.log(todo.childNodes[0].childNodes[0]);
    todo.childNodes[0].childNodes[0].classList.toggle("complete");
    displayAllTodos();
}

//CODE EXECUTION----------------------------------------------------------------
const todoListContainer = document.querySelector(".all-todos");
console.log(todoListContainer);
displayAllTodos();
