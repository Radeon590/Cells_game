//const { getCookie } = require("../cookieLib/cookie");

window.onload = main;

function main(){
    let cellsNumber = getCookie('cellsNumber');

    let columns = cellsNumber / 2;

    let container = document.getElementById('container');

    let numbers = [];

    for(let i = 0; i < columns; i++) {
        numbers.push(i);
        numbers.push(i);
    }

    for(let i = 0; i < columns; i++) {
        let newColumn = document.createElement('div');
        newColumn.className = 'cellsColumn';
        for(let j = 0; j < columns; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            let numbersIndex = getRandomInt(numbers.length - 1);
            let cellIndex = numbers[numbersIndex];
            numbers[numbersIndex] = null;
            numbers = numbers.map(getRandomInt);
            cell.id = cellIndex;
            newColumn.appendChild('cell');
        }
        container.appendChild(newColumn);
    }
}

function onCellClick(){

}

function CheckArrayIndexes(){

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }