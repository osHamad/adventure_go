/* eslint-disable no-unused-vars */

// board class that represents the character's level
class Board {
  constructor (width, height) {
    // the dimentions of the grid are stored
    // this will help with generating the grid and deciding player boundries
    this.width = width
    this.height = height

    // generated board cells are added to this dictionary
    // board cells will be fetched later by player and cell objects
    this.boardCells = {}
  }

  // method to get the height of the board
  getHeight () {
    return this.height
  }

  // method to get the width of the board
  getWidth () {
    return this.width
  }

  // this method adds new cells to the dictionary
  // cells can be accessed and manipunated later on
  addCell (newCell) {
    this.boardCells[[newCell.getRow(), newCell.getCol()]] = newCell
  }

  // this function looks for the cell that was called in the dictionary
  getCell (neededCell) {
    return this.boardCells[neededCell]
  }
}
