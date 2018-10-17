const form = document.getElementById('sizePicker')
const grid = document.getElementById("pixelCanvas");
const cPicker = document.getElementById("colorPicker");
const cells = document.querySelectorAll("td");

//Reset the Grid
form.addEventListener("submit", removeGrid);
//Make a new Grid
form.addEventListener("submit", makeGrid);

//Creates a new Grid using specified values
function makeGrid(e){
  e.preventDefault();
  //Retrieve the values of the Grid Height and Width
  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;

  //Create new rows based on Grid Height
  for (let row = 0;row < gridHeight;row++) {
    let newTr = document.createElement('tr');
    newTr.className = "Rows"
    grid.appendChild(newTr);

    //Create new columns based on Grid Width per row
    for (let col = 0;col <gridWidth; col++) {
      let newTd = document.createElement('td');
      newTd.className = "Columns";
      newTd.addEventListener("click",fillBg);
      newTr.appendChild(newTd);
    }
  }
}

//Removes all children from the table
function removeGrid () {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

//If target is a table with a class of Columns, fill the background color
function fillBg (e) {
  //if (e.target.className == "Columns") {
    e.target.style.backgroundColor = cPicker.value;
  //}
}
