/* eslint-disable no-unused-vars */
/* eslint quote-props: ["error", "always"] */

// this class is used for generating cell type objects for game levels
class Cell {
  constructor (row, col, cellType = 'walk') {
    // row and column of the cell on the grid is recorded
    this.row = row
    this.col = col

    // cell type must be specified
    // each cell has a different game attribute
    // types include block, break, exit, key, walk, void, locked
    this.cellType = cellType

    // each cell is linked to an image
    // the cell type corresponds to an image in the dictionary below
    this.cellTypeImage = {
      'walk': 'images/granite-floor.png',
      'block': 'images/rock.png',
      'break': 'images/barrel.png',
      'exit': 'images/treasure.png',
      'void': 'images/void.png',
      'move': 'images/move.png',
      'key': 'images/key.png',
      'gate': 'images/gate.png',
      'spike': 'images/spike.png'
    }
  }

  // this method returns the html id used for the specified cell
  cellName () {
    return `cell-${this.row}-${this.col}`
  }

  // gives column number
  getCol () {
    return this.col
  }

  // gives row number
  getRow () {
    return this.row
  }

  // returns the cell's type
  getType () {
    return this.cellType
  }

  // assigns or changes the type of the cell
  assignType (newType) {
    this.cellType = newType
  }

  // this method creates a new, not pre-existing cell, taking the cell type as the parameter
  createCell (newType) {
    this.assignType(newType)

    // gets the cell image and places it on the board
    document.getElementById(this.cellName()).src = this.cellTypeImage[this.getType()]
  }
}
