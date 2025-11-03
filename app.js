let todoInputEl = document.getElementById("todoText");
let displayArea = document.getElementById("displayArea");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearAll");
let countEl = document.getElementById("count");

let todoList = [];


function takeInput() {
    displayArea.innerHTML = "";
    todoList.forEach(todo => {
        let li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-200 p-2 rounded-lg";
        li.setAttribute("id", todo.id);
        li.innerHTML = `<span>${todo.text}</span>
    <button id="${todo.id}" class="text-red-600 font-bold" onclick="deleteTodo(this.id)">X</button>`;
        displayArea.appendChild(li);
    });
    countEl.textContent = todoList.length;
}

addBtn.addEventListener("click", () => {
    let text = todoInputEl.value.trim();
    if (text === "") {
        alert("Enter your task...");
        return;
    }

    let todo = {
        id: crypto.randomUUID(),
        text: text,
        completed: false
    }

    todoList.push(todo);
    takeInput();
    todoInputEl.value = "";
})

todoInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click;
})

function deleteTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    takeInput(); // Update the display after removing the todo
}

function clearAll() {
    todoList = [];
    takeInput();
}