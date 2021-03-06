const colorPicker = new iro.ColorPicker("#picker", {width: 170, color: "#FF006E" });
const gridContainer = document.querySelector('.grid-container');
const clearGridButton = document.querySelector('.clear-button');
const toolsGridButton = document.querySelector('.tools-button');
const penTypeButton = document.getElementById('pen-type');
const fillGridButton = document.getElementById('fill-grid');
const rainbowButton = document.getElementById('rainbow');


let startSize = 16 ;
let gridWidthHeight = 41 ;
let penType = 0 ;
var first = 'false';
//const penStroke = ['mouseOver' , 'click'];

function createGrid(size){
    if(first !== 'false'){resetBoard();}
    for(var i = 1 ; i <= (size*size) ; i++){
        var newDiv = document.createElement('div');
        newDiv.classList.add('grid-div');
        gridContainer.appendChild(newDiv); 
    }
    gridCell = document.querySelectorAll(".grid-div");
    gridCell.forEach(cell => {
        cell.style.width  = `${gridWidthHeight / size}rem`;
        cell.style.height = `${gridWidthHeight / size}rem`;
    }) 
    changePenType();
    first = true;
}

function changeBackground(){
    this.style.backgroundColor = gridColor ;
}

function resetBoard(){
    let board = document.querySelector(".grid-container");
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }  
}

function clearBoardColor() {
    for(var i = 0 ; i < gridCell.length ; i++){
        gridCell[i].style.backgroundColor='white';
    }
}

function fillBoardColor() {
    for(var i = 0 ; i < gridCell.length ; i++){
        gridCell[i].style.backgroundColor = gridColor;
    }
}

function changePenType(){
    if (penType == 1 ){
        document.getElementById('pen-type').textContent = 'Pen Type: Click' ;
        gridCell.forEach(cell => {
            cell.removeEventListener('mouseover',changeBackground);
            cell.addEventListener('click' , changeBackground);
         })
        --penType;
    }
    else{
        document.getElementById('pen-type').textContent = 'Pen Type: Follow' ;
        gridCell.forEach(cell => {
            cell.removeEventListener('click',changeBackground);
            cell.addEventListener('mouseover' , changeBackground);
         })
        ++penType;
    }
}

function rainbowColor(){
    
}

function toogleToolsWindow(){
    if (document.getElementById('tools').style.visibility == 'hidden'){
        document.getElementById('tools').style.visibility = 'visible';
    } 
    else {
        document.getElementById('tools').style.visibility = 'hidden' ;
    }
}

createGrid(startSize);

// listen to a color picker's color:init and color:change events
colorPicker.on(['color:init', 'color:change'], function(color) {gridColor = color.hexString;});

// ACTIVE LISTENERS //
clearGridButton.addEventListener('click', clearBoardColor);
toolsGridButton.addEventListener('click', toogleToolsWindow);
fillGridButton.addEventListener('click', fillBoardColor);
penTypeButton.addEventListener('click', changePenType);
//rainbowButton.addEventListener('click,' rainbowColor);





