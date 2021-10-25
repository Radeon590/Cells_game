//const { setCookie } = require("../js/cookieLib/cookie");

window.onload = main();

function main() {
    let startButton = document.getElementById('startButton');
    startButton.addEventListener('click', CreateTable);
}

function CreateTable(){
    let input = document.getElementById('userInput');
    let cellsNumber = input.value;
    setCookie('cellsNumber', cellsNumber);
    window.location.href = 'game.html';
}