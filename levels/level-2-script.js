/*global Board, Player, restartLevel, goToMenu, nextLevel */

// board that will be accessed later to make the level
// board is an array of generated cell objects
const board = new Board(7, 6)

// creating a new player object
const currentCell = new Player(5, 1, board, 22)

// generating board cell objects
for (let i = 1; i <= board.getHeight(); i++) {
  for (let j = 1; j <= board.getWidth(); j++) {
    board.addCell(new Cell(i, j))
  }
}

// creating cell divs in html
for (let i = 1; i <= board.getHeight(); i++) {
  // creating a table row element with id row-i
  const tableRow = document.createElement('tr')
  tableRow.id = `row-${i}`

  // adding the table row to our table with id grid
  const table = document.getElementById('grid')
  table.appendChild(tableRow)

  for (let j = 1; j <= board.getWidth(); j++) {
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

board.getCell([2, 3]).createCell('void')
board.getCell([3, 3]).createCell('void')
board.getCell([3, 4]).createCell('void')
board.getCell([4, 3]).createCell('void')
board.getCell([4, 4]).createCell('void')
board.getCell([5, 3]).createCell('void')
board.getCell([6, 3]).createCell('void')
board.getCell([6, 2]).createCell('void')
board.getCell([6, 1]).createCell('void')

board.getCell([1, 1]).createCell('block')
board.getCell([2, 1]).createCell('block')
board.getCell([5, 4]).createCell('block')
board.getCell([6, 4]).createCell('block')

board.getCell([2, 2]).createCell('break')
board.getCell([6, 7]).createCell('break')
board.getCell([6, 6]).createCell('break')
board.getCell([5, 6]).createCell('break')

board.getCell([3, 5]).createCell('move')
board.getCell([3, 6]).createCell('move')
board.getCell([3, 7]).createCell('move')

board.getCell([2, 4]).createCell('spike')
board.getCell([2, 5]).createCell('spike')
board.getCell([3, 2]).createCell('spike')
board.getCell([4, 6]).createCell('spike')

board.getCell([6, 5]).createCell('exit')

document.getElementById('restart-button2').addEventListener('click', restartLevel)

document.getElementById('main-menu-button2').addEventListener('click', goToMenu)

document.getElementById('main-menu-2').addEventListener('click', goToMenu)

document.getElementById('next-level-button2').addEventListener('click', nextLevel)
