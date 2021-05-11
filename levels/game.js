// creating a new player object
let currentCell = new Player(1, 1, movesLeft=50)


document.addEventListener('keydown', function(event){
  // if there are no more moves left the game ends
  if (currentCell.isMovesLeft()){
    document.getElementById('grid').style.display = 'none'
  }

  // defining user keyboard controls
  // each arrow key goes in dedicated direction
  if (event.keyCode === 39) {
    goRight()
  } else if (event.keyCode === 37) {
    goLeft()
  } else if (event.keyCode === 38) {
    goUp()
  } else if (event.keyCode === 40) {
    goDown()
  }

  // checks if the player reached the exit after each button click
  // if so, the grid is hidden
  if (currentCell.isPlayerExit == true){
    document.getElementById('grid').style.display = 'none'
  }
})

// board that will be accessed later to make the level
// board is an array of generated cell objects
board = new Board(8, 6)

// creating cell divs in html
for (i = 1; i <= board.getHeight(); i++) {
  // creating a table row element with id row-i
  let tableRow = document.createElement("tr")
  tableRow.id = `row-${i}`

  // adding the table row to our table with id grid
  let table = document.getElementById("grid")
  table.appendChild(tableRow);

  for (j = 1; j <= board.getWidth(); j++) {
    // creating table cell with id cell-i-j
    let tableCell = document.createElement('td')
    tableCell.id = `cell-${i}-${j}`

    // adding the cell to row i
    tableRow.appendChild(tableCell)
  }
}

// generating board cell objects
for (i = 1; i <= board.getHeight(); i++) {
  for (j = 1; j <= board.getWidth(); j++) {
    board.addCell(new Cell(i, j))
  }
}

// making player into a red cell
document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'

// creating obstacle object
document.getElementById(new Player(5,5).cellName()).style.backgroundColor = 'blue'

board.getCell([5, 5]).assignType('exit')

// function to go right
function goRight(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.right(board.getWidth())
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

// function to go left
function goLeft(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.left()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

// function to go down
function goDown(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.down(board.getHeight())
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}

// function to go up
function goUp(){
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'white'
  currentCell.up()
  document.getElementById(currentCell.cellName()).style.backgroundColor = 'red'
}
