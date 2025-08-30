

//Sudoku fields
let fields = new Array(9);
let generatedGrid = "";
let sudokuGridContainer = document.getElementById("sudoku-container");
// field valid values:
const fieldVal1 = "&nbsp;";
const fieldVal2 = "0"; 

function addToGeneratedGrid(value) {
  generatedGrid += "<div contenteditable=\"true\" class=\"field\">" + value + "</div>";
}

//fill fields with ones
for (let i = 0; i < 9; i++) {
    fields[i] = new Array(9);
    fields[i].fill(i);
    fields[i].forEach(addToGeneratedGrid);
}



sudokuGridContainer.innerHTML = generatedGrid;

const fieldsContent = document.getElementsByClassName("field");

for (let field of fieldsContent) {
  field.addEventListener("input", () => {
    field.innerText = field.innerText.replace(/[^0-9]/g, "");

    if (field.innerText.length > 1) {
      field.innerText = field.innerText.slice(0, 1);
    }else if(field.innerText.length === 0){
      field.innerHTML = fieldVal1;
    }

  });
}

let bob = document.getElementsByClassName("field");