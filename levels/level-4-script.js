// board that will be accessed later to make the level
// board is an array of generated cell objects
let board = new Board(8, 6)

// creating a new player object
let currentCell = new Player(1, 7, board, 16)

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

    // adding the cell to row i
    tableRow.appendChild(tableCell)

    let tableImage = document.createElement('img')

    tableImage.id = `cell-${i}-${j}`

    tableCell.appendChild(tableImage)

    tableImage.src = 'images/granite-floor.png'
    
  }
}

// generating board cell objects
for (i = 1; i <= board.getHeight(); i++) {
  for (j = 1; j <= board.getWidth(); j++) {
    board.addCell(new Cell(i, j))
  }
}

// making player into a character image
document.getElementById(currentCell.cellName()).src = 'images/character.png'

// creating obstacle object
board.getCell([1, 1]).createCell('void')
board.getCell([1, 2]).createCell('void')
board.getCell([1, 3]).createCell('void')

board.getCell([2, 2]).createCell('break')
board.getCell([2, 3]).createCell('break')
board.getCell([2, 4]).createCell('break')
board.getCell([3, 3]).createCell('break')
board.getCell([3, 5]).createCell('break')
board.getCell([6, 1]).createCell('break')

board.getCell([6, 8]).createCell('exit')