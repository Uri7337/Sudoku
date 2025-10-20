

//Sudoku fields
let fields = new Array(9);
let generatedGrid = "";
let sudokuGridContainer = document.getElementById("sudoku-container");
// field valid values:
const fieldVal1 = "&nbsp;"; // non-breaking space
const fieldVal2 = "0"; 

function addToGeneratedGrid(value, index) {
  let box = 0;
  //udělat funkci, která podle value a indexu určí box
  //box 0:
  //Columns 0,1,2 - index
  //Rows 000,111,222 - value

  //GPT one liner of my code below:
  box = Math.floor(value / 3) * 3 + Math.floor(index / 3);
  /*
    if(value<3){
      if(index<3){
        box = 0;
      }else if(index<6){
        box = 1;
      }else{
        box = 2;
      }
      
    }else if(value<6){
      if(index<3){
        box = 3;
      }else if(index<6){
        box = 4;
      }else{
        box = 5;
      }
    }else{
      if(index<3){
        box = 6;
      }else if(index<6){
        box = 7;
      }else{
        box = 8;
      }
    }
  */
 
  generatedGrid += "<div contenteditable=\"true\" class=\"field\" data-row=\""+value+"\" data-column=\""+index+"\" data-box=\""+box+"\">" + box + "</div>";
}

//fill fields with values
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

  // adds input event listener for validation
  field.addEventListener("input", () => {
      // On change validate
      // if you find mistake, highlight row
      
      if(fieldValidator.rowValidation(field)){
          console.log("row is VALID!!!");

        //fieldValidator.highlight(field,fieldValidator.row);
      }

      // if you find mistake, highlight column
      /*
        if(fieldValidator.columnValidation(field)){
          
        }

        // if you find mistake, highlight box
        if(fieldValidator.boxValidation(field)){
          
        }
      */
   });
}

// fieldsContent = HTMLCollection 

// Validation
// fieldsContent - row

// fieldsContent - column

// fieldsContent - box

// Object fieldValidator
const fieldValidator = {
      // Validator Properties
      row: [],
      column: [],
      box: [],

      //Validator Methods
      /*
      highlight : function() {
      return this.firstName + " " + this.lastName;
      },
      */

      rowValidation : function(field) {
        
        console.log("field:");
        console.log(field);
        console.log(typeof field);
        console.log(field.innerHTML);

        console.log(fieldsContent);

        //fieldsContent[1].dataset.row
        //fieldsContent[1].dataset.column
        //fieldsContent[1].dataset.box
        // console.log(typeof fieldsContent[1].dataset.row); <- string
        // validation will be false and highlight this filled slightly or no highlighting at all
        if(field.innerHTML == fieldVal1){
          return false;
        }

        let num = parseInt(field.innerHTML);
        console.log(typeof num);
        console.log(num);

        return false;
      }

};

