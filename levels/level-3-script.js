/* global Cell, Board, Player, restartLevel, goToMenu, nextLevel */
/* eslint-disable no-unused-vars */

// board that will be accessed later to make the level
// board is an array of generated cell objects
const board = new Board(8, 6)

// creating a new player object
const currentCell = new Player(3, 8, board, 28, [2, 7])

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
    const tableCell = document.createElement('td')

    // adding the cell to row i
    tableRow.appendChild(tableCell)

    const tableImage = document.createElement('img')

    tableImage.id = `cell-${i}-${j}`

    tableCell.appendChild(tableImage)

    tableImage.src = 'images/granite-floor.png'
  }
}

// making player into a character image
document.getElementById(currentCell.cellName()).src = 'images/character.png'

// creating obstacle object
// block obstacles
board.getCell([2, 4]).createCell('block')
board.getCell([2, 5]).createCell('block')
board.getCell([2, 6]).createCell('block')
board.getCell([2, 8]).createCell('block')
board.getCell([5, 2]).createCell('block')
board.getCell([5, 4]).createCell('block')
board.getCell([5, 6]).createCell('block')
board.getCell([1, 3]).createCell('block')
board.getCell([2, 3]).createCell('block')

// void obstacles
board.getCell([1, 1]).createCell('void')
board.getCell([1, 2]).createCell('void')
board.getCell([2, 1]).createCell('void')
board.getCell([2, 2]).createCell('void')
board.getCell([3, 1]).createCell('void')
board.getCell([3, 2]).createCell('void')
board.getCell([4, 1]).createCell('void')
board.getCell([4, 2]).createCell('void')
board.getCell([6, 8]).createCell('void')
board.getCell([5, 8]).createCell('void')

// spike obstacles
board.getCell([3, 4]).createCell('spike')
board.getCell([3, 5]).createCell('spike')
board.getCell([4, 7]).createCell('spike')
board.getCell([5, 3]).createCell('spike')
board.getCell([5, 5]).createCell('spike')

// breakable obstacles
board.getCell([6, 6]).createCell('break')
board.getCell([4, 5]).createCell('break')

// openable gate obstacles
board.getCell([2, 7]).createCell('gate')

// gate key cell
board.getCell([5, 1]).createCell('key')

// exit
board.getCell([1, 7]).createCell('exit')

// function to restart level
document.getElementById('restart-button3').addEventListener('click', restartLevel)

// functions to return to menu
document.getElementById('main-menu-button3').addEventListener('click', goToMenu)

document.getElementById('main-menu-3').addEventListener('click', goToMenu)

// function to go to next level
document.getElementById('next-level-button3').addEventListener('click', nextLevel)
