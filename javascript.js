const grid = document.querySelector(".container");

function startPaint(){
    deleteCells();
    let gridAmount = 0;
    while(gridAmount < 1 || gridAmount > 100){
    gridAmount = prompt("Please enter how many cells per side you'd like (between 1-100):");
    };
    printGrid(gridAmount);
}

function printGrid(gridAmount){
    for(let row = 0; row < gridAmount; row++){
        const rowCreation = document.createElement("div");
        rowCreation.classList.add("row");
        grid.appendChild(rowCreation);
        for(let column = 0; column < gridAmount; column++){
            const divSquare = document.createElement("button");
            divSquare.classList.add("cell");
            divSquare.style.height = "25px";
            divSquare.style.width = "25px";
            divSquare.style.backgroundColor = "white";
            divSquare.style.border = "2px solid black";
            rowCreation.appendChild(divSquare);
            divSquare.addEventListener("mouseover", function changeColor(){
                divSquare.style.backgroundColor = "grey";
            });
        };
    };
}

function deleteCells(){
    const deletion = document.getElementsByClassName("row");
    while(deletion[0]){
        deletion[0].parentNode.removeChild(deletion[0]);
    }
}

const playButton = document.createElement("button");
playButton.textContent = "Create New Grid";
grid.appendChild(playButton);
playButton.addEventListener("click",startPaint);