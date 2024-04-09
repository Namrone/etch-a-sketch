document.addEventListener("DOMContentLoaded", function(){

const grid = document.querySelector(".container");

function startPaint(){
    deleteGrid();
    let gridAmount = 0;
    while(gridAmount < 1 || gridAmount > 100){
    gridAmount = prompt("Please enter how many cells per side you'd like (between 1-100):");
    };
    printGrid(gridAmount);
}

function printGrid(gridAmount){
    let cellSize = (960/gridAmount);
    console.log(cellSize);
    for(let row = 0; row < gridAmount; row++){
        const rowCreation = document.createElement("div");
        rowCreation.classList.add("row");
        rowCreation.style.display = "flex";
        rowCreation.style.maxWidth = "960px";
        rowCreation.style.minHeight = cellSize + "px";
        rowCreation.style.padding = "0";
        rowCreation.style.margin = "0";
        rowCreation.style.boxSizing = "border-box";
        grid.appendChild(rowCreation);
        for(let column = 0; column < gridAmount; column++){
            const divSquare = document.createElement("button");
            divSquare.classList.add("cell");
            divSquare.style.height = cellSize + "px";
            divSquare.style.width = cellSize + "px";
            divSquare.style.backgroundColor = "white";
            divSquare.style.border = "2px solid black";
            divSquare.style.flexGrow = "1";
            divSquare.style.boxSizing = "border-box";
            rowCreation.appendChild(divSquare);
            divSquare.addEventListener("mouseover", function changeColor(){
                divSquare.style.backgroundColor = "grey";
            });
        };
    };
}

function deleteGrid(){
    const deletion = document.getElementsByClassName("row");
    while(deletion[0]){
        deletion[0].parentNode.removeChild(deletion[0]);
    }
}

const playButton = document.createElement("button");
playButton.textContent = "Create New Grid";
const parentDiv = grid.parentNode;
parentDiv.insertBefore(playButton, grid);
playButton.addEventListener("click",startPaint);
});