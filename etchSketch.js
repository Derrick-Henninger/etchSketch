

const body =document.querySelector('body');
const gridBtn = document.createElement('button');
gridBtn.textContent = "Grid Size";
const gridContainer = document.querySelector('#grid16x16');
body.appendChild(gridBtn);
body.appendChild(gridContainer);


// Add button on top of screen to prompt user for how many squares 
//per side they would like. The existing grid should be removed/replaced
//should be able to enter 64 and have a brand new 64x64 grid pop up 
//without changing the total amount of pixels used. Use flexbox.

let sqrsPerSide;
makeGrid (16);

// Add if then statement to block input of 100 or more, a zero or less and NaN.
//Alert user of parameters for input.

gridBtn.addEventListener("click", () => {
    let sqrsPerSide = prompt("How many squares per side would you like in the grid below?");
    removeGrid();
    if (sqrsPerSide > 0 && sqrsPerSide < 101 && sqrsPerSide != NaN){
    makeGrid(parseInt(sqrsPerSide));
    }
    else {
        makeGrid(16);
        alert("Please enter a number from 1 to 100.");
    }
})

function removeGrid () {
    const divColumnsRemove = document.getElementsByClassName('column');
    while (divColumnsRemove.length > 0) {
        divColumnsRemove[0].remove();
    }
    const divRowsRemove = document.getElementsByClassName('rows');
    while (divRowsRemove.length > 0) {
        divRowsRemove[0].remove();
    }
    }

function makeGrid (sqrsPerSide){
    
 for (let i = 0; i < sqrsPerSide; i++){

    let gridColumns = document.createElement('div');
    gridColumns.classList.add('column');
    gridContainer.appendChild(gridColumns);
    

    for (let j = 0; j < sqrsPerSide; j++){
    let gridRows = document.createElement('div');
    gridRows.classList.add('rows');
    gridColumns.appendChild(gridRows);
    
    }
  
}

let numberOfDivs = document.getElementsByClassName('rows');
for (let i = 0; i < numberOfDivs.length; i++) {
    numberOfDivs[i].addEventListener('mouseover', () => {
        numberOfDivs[i].classList.add('highlight');
    });   
}
}


