//ex3
const inputContainer = document.querySelector("#inputContainer");

function createInput() {
    let input = document.createElement("input");
    input.id = "texto-tarefa";
    input.style.margin = "20px"
    input.style.marginLeft = "30%"
    input.style.padding = "8 px"

    inputContainer.appendChild(input);
} createInput()

//ex 4
const listContainer = document.querySelector("#listContainer");

function creatOl() {
    let olList = document.createElement("ol");
    olList.id = "lista-tarefas";

    listContainer.appendChild(olList);
   
    returnTasks ()
   
} creatOl()

//ex 5
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// https://www.w3schools.com/howto/howto_html_clear_input.asp

function createButton() {
    let button = document.createElement("button");
    button.id = "criar-tarefa";
    button.innerText = "Adicionar Tarefa"
    button.style.margin = "10px "
    button.style.color = "rgb(6, 61, 6)"
    button.style.border = "solid 2px"
    button.style.border.color = "rgb(6, 61, 6)"
    button.style.padding = "8 px"

    inputContainer.appendChild(button)

} createButton()

let buttonEvent = document.querySelector("#criar-tarefa");
buttonEvent.addEventListener("click", showText)

const input = document.querySelector("#texto-tarefa")
const ordenateList = document.querySelector("#lista-tarefas")

function showText() {
    let liList = document.createElement("li")
    liList.classList = "listItem"
    liList.style.marginLeft = "10%"
    liList.style.color = "rgb(6, 61, 6)"
    liList.innerHTML = input.value

    ordenateList.appendChild(liList)
    input.value = ""
    NewColor()
    addDoubleClick()
}

// ex 7 
let listItem = document.getElementsByClassName("listItem")
function NewColor() {
    for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].addEventListener("click", changeColor)
    }
}

function changeColor(event) {
    for (let index = 0; index < listItem.length; index += 1) {

        if (listItem[index].style.background === "gray") {
            listItem[index].style.removeProperty('background')
        }
        event.target.style.background = "gray"
    }
   
}

// ex 9 
// https://www.w3schools.com/howto/howto_js_toggle_class.asp

function addDoubleClick() {
    for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].addEventListener("dblclick", completedTask)
        
    } 
}

function completedTask(event) {
    event.target.classList.toggle("completed")
    
}

// ex 10 
const buttonsContainer = document.querySelector("#buttonsContainer")

function createClearButton() {
    let clearButton = document.createElement("button")
    clearButton.id = "apaga-tudo"
    clearButton.innerText = "Limpar Tarefas"
    clearButton.style.margin = "10px "
    clearButton.style.marginLeft = "10%"
    clearButton.style.color = "rgb(6, 61, 6)"
    clearButton.style.border = "solid 2px"
    clearButton.style.border.color = "rgb(6, 61, 6)"
    clearButton.style.padding = "8 px"

    buttonsContainer.appendChild(clearButton)

} createClearButton()

let clearButtonEvent = document.querySelector("#apaga-tudo")
clearButtonEvent.addEventListener("click", clearAll)

function clearAll() {
    for (let index = listItem.length - 1; index >= 0; index -= 1) {
        listItem[index].remove()
    }
}

// ex 11
const moveButtonContainer = document.querySelector("#moveButtons")

function ClearCompletedTask() {
    let clearTasks = document.createElement("button")
    clearTasks.id = "remover-finalizados"
    clearTasks.innerText = "Limpar Tarefas Finalizadas"
    clearTasks.style.margin = "10px "
    clearTasks.style.marginLeft = "10%"
    clearTasks.style.color = "rgb(6, 61, 6)"
    clearTasks.style.border = "solid 2px"
    clearTasks.style.border.color = "rgb(6, 61, 6)"
    clearTasks.style.padding = "8 px"

    moveButtonContainer.appendChild(clearTasks)

} ClearCompletedTask()

let clearTaskButtons = document.querySelector("#remover-finalizados")
clearTaskButtons.addEventListener("click", clearCompletedTasks)

function clearCompletedTasks() {
    let getcompletedTask = document.getElementsByClassName("completed")
    for (let index = getcompletedTask.length - 1; index >= 0; index -= 1) {
        getcompletedTask[index].remove()
    }
}

// ex 12

function createSaveTasksButton() {
    let saveTasksButton = document.createElement("button");
    saveTasksButton.id = "salvar-tarefas"
    saveTasksButton.innerText = "Salvar Tarefas"
    saveTasksButton.style.margin = "10px "
    saveTasksButton.style.color = "rgb(6, 61, 6)"
    saveTasksButton.style.border = "solid 2px"
    saveTasksButton.style.border.color = "rgb(6, 61, 6)"
    saveTasksButton.style.padding = "8 px"

    buttonsContainer.appendChild(saveTasksButton)
} createSaveTasksButton()

let saveTasks = document.getElementById("salvar-tarefas");
saveTasks.addEventListener("click", TasksInLocal)


function TasksInLocal() {
    const tasksSaved = localStorage.setItem("tasks", document.querySelector("ol").innerHTML)

}
function returnTasks (){
    let ol = document.querySelector("ol")
    const getTasks = localStorage.getItem("tasks")
    ol.innerHTML = getTasks

}

//ex13

//mover o item selecionado
//se o usuário tentar mover o primeiro item para cima ou o último para baixo?
//- mensagem de "não é possível mover esse item"

// function createMoveButtons (){
//     let moveUp = document.createElement("button");
//     let moveDown = document.createElement("button");

//     moveUp.id = "mover-cima"
//     moveUp.innerText = "Mover para cima"
//     moveUp.style.margin = "10px "
//     moveUp.style.color = "rgb(6, 61, 6)"
//     moveUp.style.border = "solid 2px"
//     moveUp.style.border.color = "rgb(6, 61, 6)"
//     moveUp.style.padding = "8 px"

//     moveDown.id = "mover-baixo"
//     moveDown.innerText = "Mover para baixo"
//     moveDown.style.margin = "10px "
//     moveDown.style.color = "rgb(6, 61, 6)"
//     moveDown.style.border = "solid 2px"
//     moveDown.style.border.color = "rgb(6, 61, 6)"
//     moveDown.style.padding = "8 px"

//     moveButtonContainer.appendChild(moveUp);
//     moveButtonContainer.appendChild(moveDown)
// } createMoveButtons()

// let moveUpEvent = document.getElementById("mover-cima")
// let moveDownEvent = document.getElementById("mover-baixo")

// moveUpEvent.addEventListener("click", selectedUp)

// function selectedUp (){
// console.log ("up")
// }

// moveDownEvent.addEventListener("click", selectedDown)

// function selectedDown () {
//     console.log("down")
// }

// ex 14

function createClearSelectedButton() {
    let clearSelectedButton = document.createElement("button")

    clearSelectedButton.id = "remover-selecionado"
    clearSelectedButton.innerText = "Limpar Tarefa Selecionada"
    clearSelectedButton.style.margin = "10px "
    clearSelectedButton.style.color = "rgb(6, 61, 6)"
    clearSelectedButton.style.border = "solid 2px"
    clearSelectedButton.style.border.color = "rgb(6, 61, 6)"
    clearSelectedButton.style.padding = "8 px"

    buttonsContainer.appendChild(clearSelectedButton)
} createClearSelectedButton()

const clearSelectedEvent = document.getElementById("remover-selecionado")
clearSelectedEvent.addEventListener("click", clearSelected)

function clearSelected() {
    let getSelected = document.getElementsByClassName("listItem")
    for (let index = getSelected.length - 1; index >= 0; index -= 1) {
        if (getSelected[index].style.background === "gray") {
            getSelected[index].remove()
        }
    }
}