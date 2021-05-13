// board that will be accessed later to make the level
// board is an array of generated cell objects
let board = new Board(8, 6)

// creating a new player object
let currentCell = new Player(1, 7, board, 16)

// generating board cell objects
for (i = 1; i <= board.getHeight(); i++) {
  for (j = 1; j <= board.getWidth(); j++) {
    board.addCell(new Cell(i, j))
  }
}

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

// making player into a character image
document.getElementById(currentCell.cellName()).src = 'images/character.png'

// creating obstacle object
board.getCell([1, 1]).createCell('void')
board.getCell([1, 2]).createCell('void')
board.getCell([1, 3]).createCell('void')
board.getCell([1, 4]).createCell('void')
board.getCell([2, 1]).createCell('void')
board.getCell([3, 1]).createCell('void')
board.getCell([4, 1]).createCell('void')
board.getCell([5, 8]).createCell('void')
board.getCell([4, 8]).createCell('void')
board.getCell([3, 8]).createCell('void')
board.getCell([2, 8]).createCell('void')
board.getCell([3, 7]).createCell('void')
board.getCell([4, 7]).createCell('void')
board.getCell([4, 6]).createCell('void')

board.getCell([1, 8]).createCell('block')
board.getCell([4, 3]).createCell('block')
board.getCell([4, 4]).createCell('block')
board.getCell([4, 5]).createCell('block')
board.getCell([3, 6]).createCell('block')
board.getCell([6, 4]).createCell('block')

board.getCell([2, 2]).createCell('break')
board.getCell([2, 3]).createCell('break')
board.getCell([2, 4]).createCell('break')
board.getCell([3, 3]).createCell('break')
board.getCell([3, 5]).createCell('break')
board.getCell([6, 1]).createCell('break')

board.getCell([6, 8]).createCell('exit')