class Cell {
  constructor (row, col, boardWidth=8, boardHeight=6) {
    this.row = row;
    this.col = col;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
  }

  cellName () {
    return `cell-${this.row}-${this.col}`
  }

  col () {
    return this.col
  }

  row () {
    return this.row
  }

  right (){
    if (this.col < this.boardWidth){
      this.col ++
    }
  }

  left (){
    if (this.col > 1){
      this.col --
    }
  }

  down (){
    console.log()
    if (this.row < this.boardHeight){
      this.row ++
    }
  }
  
  up (){
    if (this.row > 1){
      this.row --
    }
  }
}

document.addEventListener('keydown', function(event){
  if (event.keyCode === 39) {
    goRight()
  } else if (event.keyCode === 37) {
    goLeft()
  } else if (event.keyCode === 38) {
    goUp()
  } else if (event.keyCode === 40) {
    goDown()
  }
})

for (i = 1; i <= 6; i++) {
  var tableRow = document.createElement("tr");
  tableRow.id = `row-${i}`
  var table = document.getElementById("grid");
  table.appendChild(tableRow);
  for (j = 1; j <= 8; j++) {
    let tableCell = document.createElement('td')
    tableCell.id = `cell-${i}-${j}`
    tableRow.appendChild(tableCell)
  }
}

let currentCell = new Cell(1, 1)
document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
function goRight(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.right()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

function goLeft(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.left()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

function goDown(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.down()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

function goUp(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.up()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}