//Default grid: rows class, default number of divs, mouseover = bg color and incremental shading
    //If rainbow button clicked: gridRows background color is random rainbow colors for each div
    //

const body =document.querySelector('body');
const gridBtn = document.createElement('button');
const gridRainbowBtn = document.createElement('button');

gridBtn.textContent = "Grid Size";
gridRainbowBtn.textContent= 'Rainbow';
const gridContainer = document.querySelector('#grid16x16');
body.appendChild(gridBtn);
body.appendChild(gridRainbowBtn);
body.appendChild(gridContainer);

let sqrsPerSide;
let gridRows;
makeGrid (16);

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
};

gridRainbowBtn.addEventListener('click', () => {
    const gridRows = document.getElementsByClassName('rows');
    const rainbowColors = ['blue', 'green', 'red', 'yellow', 'violet', 'orange'];
    for (let i = 0; i < gridRows.length; i++)   {
        let randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
        gridRows[i].style.backgroundColor = randomColor;
    }
});

function makeGrid (sqrsPerSide){
    
    for (let i = 0; i < sqrsPerSide; i++){
        let gridColumns = document.createElement('div');
        gridColumns.classList.add('column');
        gridContainer.appendChild(gridColumns);
    

        for (let j = 0; j < sqrsPerSide; j++){
            let gridRows = document.createElement('div');
            gridRows.classList.add('rows');
            gridRows.style.opacity = '0.0';
            gridColumns.appendChild(gridRows);

            gridRows.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(gridRows.style.opacity);
                if (currentOpacity < 1){
                gridRows.style.opacity = (currentOpacity + 0.1).toFixed(1);
                }
                gridRows.classList.add('highlight');
            }
        );
        }   
    }
}
