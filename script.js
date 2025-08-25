

//Sudoku fields
let fields = new Array(9);
let finalGrid = "";
let sudokuGridContainer = document.getElementById("sudoku-container");

function addToFinalGrid(value) {
  finalGrid += "<div class=\"field\">" + value + "</div>";
}

//fill fields with ones
for (let i = 0; i < 9; i++) {
    fields[i] = new Array(9);
    fields[i].fill(1);
    fields[i].forEach(addToFinalGrid);
}

//console.log(fields); // 

sudokuGridContainer.innerHTML = finalGrid;

