/* global Cell, Board, Player, restartLevel, goToMenu, nextLevel */
/* eslint-disable no-unused-vars */

// board that will be accessed later to make the level
// board is an array of generated cell objects
const board = new Board(7, 6)

// creating a new player object
const currentCell = new Player(1, 6, board, 23)

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
// void obstacles
board.getCell([1, 1]).createCell('void')
board.getCell([1, 2]).createCell('void')
board.getCell([1, 3]).createCell('void')
board.getCell([2, 1]).createCell('void')
board.getCell([4, 6]).createCell('void')
board.getCell([3, 1]).createCell('void')
board.getCell([3, 6]).createCell('void')
board.getCell([1, 7]).createCell('void')
board.getCell([2, 7]).createCell('void')
board.getCell([3, 7]).createCell('void')
board.getCell([4, 7]).createCell('void')

// block obstacles
board.getCell([1, 4]).createCell('block')
board.getCell([4, 5]).createCell('block')
board.getCell([4, 4]).createCell('block')
board.getCell([4, 3]).createCell('block')
board.getCell([5, 7]).createCell('block')

// movable obstacles
board.getCell([5, 2]).createCell('move')
board.getCell([6, 2]).createCell('move')
board.getCell([5, 5]).createCell('move')
board.getCell([6, 4]).createCell('move')

// breakable obstacles
board.getCell([2, 2]).createCell('break')
board.getCell([2, 4]).createCell('break')
board.getCell([3, 5]).createCell('break')
board.getCell([3, 3]).createCell('break')

// exit cell
board.getCell([6, 7]).createCell('exit')

// function to restart game
document.getElementById('restart-button1').addEventListener('click', restartLevel)

// functions to return to menu
document.getElementById('main-menu-button1').addEventListener('click', goToMenu)

document.getElementById('main-menu-1').addEventListener('click', goToMenu)

// go to the next level
document.getElementById('next-level-button1').addEventListener('click', nextLevel)
