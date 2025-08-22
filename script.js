

const fruits = ["1", "2", "3", "4"];

let text = "";
let sudokuGrid = document.getElementById("sudoku-container");
fruits.forEach(myFunction);
//text += "</ul>";

sudokuGrid.innerHTML = text;

function myFunction(value) {
  text += "<div>" + value + "</div>";
}