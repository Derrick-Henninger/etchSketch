

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



gridBtn.addEventListener("click", () => {
    let gridSize = prompt("How many squares per side would you like in the grid below?");
    return gridSize;
}
)
//when ready to run change sqrs to equal gridSize.
let sqrsPerSide = 50;
makeGrid ();


function makeGrid (){
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


