const BoardPixel = document.querySelector("#pixel-board")

function createfirstBoard(number) {

    for (let counter = 0; counter < number; counter += 1) {
        let line = document.createElement("div")
        line.classList = "line"
        BoardPixel.appendChild(line)

        for (let counter2 = 0; counter2 < number; counter2 += 1) {
            let pixel = document.createElement("div")
            pixel.classList = "pixel"

            BoardPixel.appendChild(pixel)
        }
    }
    addClickColor()
} createfirstBoard(5)

// ex 7
let colorDiv = document.querySelectorAll(".color")
for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].addEventListener("click", changeClass);
}

function changeClass(event) {

    for (let index = 0; index < colorDiv.length; index += 1) {
        let idc = colorDiv[index]
        idc.classList.remove("selected")
        event.target.classList.add("selected")
    }

}

// ex 8
function addClickColor() {
    const pixelElment = document.querySelectorAll(".pixel")
    for (let i = 0; i < pixelElment.length; i += 1) {
        pixelElment[i].addEventListener("click", changeColor)
    }

}

function changeColor(event) {
    let newColor = document.querySelector(".selected")
    event.target.style.background = newColor.classList[1]


}

//ex 9 
const buttonContainer = document.querySelector("#buttonContainer");

function createButton() {
    let button = document.createElement("button")
    button.id = "clear-board"
    button.innerHTML = "Limpar"
    button.style.margin = "10px"
    button.style.marginLeft = "100px"

    buttonContainer.appendChild(button)

} createButton()

let button = document.querySelector("#clear-board")
button.addEventListener("click", clear)

function clear() {
    let pixelBoard = document.querySelectorAll("#pixel-board>div")
    for (let i = 0; i < pixelBoard.length; i += 1) {
        pixelBoard[i].style.background = "white"
    }

}

// ex10
// https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCcz2dZ3AfMTZ0x9bQ5_BYeVvC-5BiA-EMvDkNufkfHlEeTyxd18lhoCRZwQAvD_BwE
// https://github.com/tryber/sd-021-b-project-pixels-art/tree/Fernanda-Grein-project-pixels-art 
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute
function createButtonAndInput() {
    let boardButton = document.createElement("button");
    let input = document.createElement("input")

    boardButton.id = "generate-board"
    boardButton.innerHTML = "VQV"
    boardButton.style.margin = "10px"
    input.id = "board-size"
    input.style.margin = "10px"
    input.type = "number"
    input.setAttribute("min", 1)
    input.setAttribute("max", 50)


    buttonContainer.appendChild(input)
    buttonContainer.appendChild(boardButton)


} createButtonAndInput()

let buttonBoard = document.querySelector("#generate-board")
buttonBoard.addEventListener("click", createNewBoard)
let inputt = document.getElementById("board-size")


function createNewBoard() {
    const BoardPixel = document.querySelector("#pixel-board")


    let inputValue = [parseInt(inputt.value)]

    if (inputValue < 5) {
        inputValue = 5
    } else if (inputValue > 50) {
        inputValue = 50
    } else if (inputt.value == "") {
        alert("Board inválido!")
    }

    BoardPixel.innerHTML = ""
    for (let count = 0; count < inputValue; count += 1) {
        let newLine = document.createElement("div")
        newLine.className = "line"

        BoardPixel.appendChild(newLine)

        for (let count2 = 0; count2 < inputValue; count2 += 1) {
            let newPixel = document.createElement("div")
            newPixel.className = "pixel"

            BoardPixel.appendChild(newPixel)
        }
    }
}
inputt.value = ""
addClickColor()