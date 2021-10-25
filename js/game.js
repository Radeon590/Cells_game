//const { getCookie } = require("../cookieLib/cookie");

window.onload = main;

function main(){
    let cellsNumber = getCookie('cellsNumber');

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
    }
}

function onCellClick(){
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getClearArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != null){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}