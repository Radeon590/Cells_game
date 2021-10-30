//const { getCookie } = require("../cookieLib/cookie");

let dnkSwitched = false;
let lastCell = null;
let savedCell = null;
let idToReset = null;
let score = 0;

window.onload = main;

function main() {
    //easter egg moment
    let scoreEasterEgg = document.getElementById('Score');
    scoreEasterEgg.onclick = switchToDNK;
    //
    initializeCells();


    /*let cellsNumber = getCookie('cellsNumber');

    let columns = cellsNumber / 2;

    let container = document.getElementById('container');

    //создание массива для циферок
    let numbers = [];

    for(let i = 0; i < columns; i++) {
        numbers.push(i);
        numbers.push(i);
    }

    for(let i = 0; i < columns; i++) {
        //создаем колонку
        let newColumn = document.createElement('div');
        newColumn.className = 'cellsColumn';
        //создаем клетки в колонку
        for(let j = 0; j < columns; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', onCellClick);
            newColumn.appendChild('cell');
            //определем циферку("картинку") для клетки
            let numbersIndex = getRandomInt(numbers.length - 1);
            let cellIndex = numbers[numbersIndex];
            numbers[numbersIndex] = null;
            numbers = getClearArray(numbers);
            cell.id = cellIndex;
        }
        container.appendChild(newColumn);
    }*/
}

function switchToDNK() {
    if (!dnkSwitched) {
        let cells = document.getElementsByClassName('Cells');

        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.add('DNK');
        }

        let background = document.getElementById('background');
        background.classList.add('DNK');
        dnkSwitched = true;
    }
    else {
        let cells = document.getElementsByClassName('Cells');

        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('DNK');
        }

        let background = document.getElementById('background');
        background.classList.remove('DNK');
        dnkSwitched = false;
    }
}

function initializeCells() {
    let cells = document.getElementsByClassName('Cells');

    let numbers = [];

    for (let i = 0; i < 8; i++) {
        numbers.push(i + 1);
    }
    for (let i = 0; i < 8; i++) {
        numbers.push(i + 1);
    }

    for (let i = 0; i < cells.length; i++) {
        let index = getRandomInt(numbers.length - 1);
        cells[i].id = "Cell" + numbers[index];
        cells[i].onclick = onCellClick;
        numbers[index] = null;
        numbers = getClearArray(numbers);
    }
}

function onCellClick() {
    let cooldownTime = 600;
    clickCooldown(cooldownTime - 1);
    if (lastCell != null) {
        if (lastCell.id == this.id) {
            savedCell = this;
            setTimeout(markTrueCells, cooldownTime);
        }
        else {
            savedCell = this;
            setTimeout(closeWrongCells, cooldownTime);
        }
    }
    else {
        lastCell = this;
    }
}

function clickCooldown(length){
    let cells = document.getElementsByClassName('Cells');
    for(let i = 0; i < cells.length; i++) {
        cells[i].setAttribute('disabled', true);
    }
    setTimeout(clickCooldown_enableCells, length);
}

function clickCooldown_enableCells(){
    let cells = document.getElementsByClassName('Cells');
    for(let i = 0; i < cells.length; i++) {
       cells[i].removeAttribute('disabled');
    }
}

function markTrueCells(){
    score++;
    let score_text = document.getElementById('Score');
    score_text.innerHTML = 'Score: ' + score;
    //
    lastCell.removeAttribute('onclick');
    savedCell.removeAttribute('onclick');
    lastCell = null;
    savedCell = null;
}

function closeWrongCells() {
    if (savedCell != null) {
        lastCell.onclick = null;
        lastCell.click();
        lastCell.onclick = onCellClick;
        savedCell.onclick = null;
        savedCell.click();
        savedCell.onclick = onCellClick;
        savedCell = null;
        lastCell = null;
    }
}

function disableCell() {

    this.setAttribute('disabled', true);
    lastCell = null;
}

function resetID() {
    lastCell = idToReset;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getClearArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function playMusic() {
    console.log("play");
    var audio = new Audio('source/chill.wav');
    audio.play(); // Автоматически запускаем
    console.log("played");
}