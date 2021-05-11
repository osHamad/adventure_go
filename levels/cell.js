// this class is used for generating cell type objects for game levels
class Cell {
  constructor (row, col, cellType='walk') {
    // row and column of the cell on the grid is recorded
    this.row = row;
    this.col = col;

    // cell type must be specified
    // each cell has a different game attribute
    // types include block, break, exit, key, walk, void, locked
    this.cellType = cellType
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
}