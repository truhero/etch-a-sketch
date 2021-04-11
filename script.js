 
const gridContainer = document.querySelector('.grid-container');

let gridSize = 16 ;
let gridWidth, gridLength = 40 ;

function createGrid(size){
    for(var i = 1 ; i <= (size*size) ; i++){
        var newDiv = document.createElement('div');
        newDiv.classList.add('grid-div');
        newDiv.setAttribute("id","gridDiv");
        gridContainer.appendChild(newDiv);
        //console.log("You created " + i + " divs!");
    }
}


createGrid(gridSize);