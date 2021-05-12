// this is the player class
// your character's information and functions are stored and executed here
class Player {
  constructor (row, col, board, movesLeft) {
    // row and column to help identify the player's current location
    this.row = row;
    this.col = col;
    this.board = board
    this.characterImage = './images/character.png'
    this.floorImage = './images/granite-floor.png'

    // for key levels this must be set to true to proceed
    this.keyGained = false;

    // shows the amount of moves left
    // if no moves left, game is over
    this.movesLeft = movesLeft;

    // once the player reaches the exit, this will be set to true
    // the level will finish
    this.isPlayerExit = false;
  }

  // this checks if there are any moves left
  isMovesLeft () {
    if (this.movesLeft > 1) {
      return true
    } else {
      return false
    }
  }

  // returns the amount of moves left
  movesNumber () {
    return this.movesLeft
  }

  // returns the html id for the cell
  cellName () {
    return `cell-${this.row}-${this.col}`
  }

  // method to check if path is blocked, either block or void
  checkForBlock (futureLocation) {
    let isBlockType = this.board.getCell(futureLocation).getType()
    if (isBlockType === 'block' || isBlockType === 'void') {
      return true
    } else {
      return false
    }
  }

  // checks if the cell infront is breakable
  checkForBreak (futureLocation) {
    let isBreakType = this.board.getCell(futureLocation)
    if (isBreakType.getType() === 'break') {
      isBreakType.assignType('walk')
      isBreakType.createCell('walk')
      return true
    } else {
      return false
    }
  }

  // checks if the exit was reached
  checkForExit (futureLocation) {
    let isExitType = this.board.getCell(futureLocation).getType()
    if (isExitType === 'exit') {
      return true
    } else {
      return false
    }
  }

  // when the player wants to go right, this method is called
  right (width) {
    if (this.col < width) {
      let futureLocation = [this.row, this.col + 1]

      //checking for blocked or breakable cells
      // if there are, the movement will not execute
      if (this.checkForBlock(futureLocation)){return}
      if (this.checkForBreak(futureLocation)){
        this.movesLeft --
        return
      }

      // checking is the exit is reached and setting true accordingly
      if (this.checkForExit(futureLocation)){
        this.isPlayerExit = true
        }

      // if no other condition blocks the movement, character will move

      document.getElementById(this.cellName()).src = this.floorImage

      this.col ++

      document.getElementById(this.cellName()).src = this.characterImage

      this.movesLeft --
    }
  }


  left () {
    if (this.col > 1) {
      let futureLocation = [this.row, this.col - 1]

      //checking for blocked or breakable cells
      // if there are, the movement will not execute
      if (this.checkForBlock(futureLocation)){return}
      if (this.checkForBreak(futureLocation)){
        this.movesLeft --
        return
      }

      // checking is the exit is reached and setting true accordingly
      if (this.checkForExit(futureLocation)){
      this.isPlayerExit = true
      }
      document.getElementById(this.cellName()).src = this.floorImage
      this.col --
      document.getElementById(this.cellName()).src = this.characterImage
      this.movesLeft --
    }
  }

  down (height) {
    if (this.row < height) {
      let futureLocation = [this.row + 1, this.col]

      //checking for blocked or breakable cells
      // if there are, the movement will not execute
      if (this.checkForBlock(futureLocation)){return}
      if (this.checkForBreak(futureLocation)){
        this.movesLeft --
        return
      }

      // checking is the exit is reached and setting true accordingly
      if (this.checkForExit(futureLocation)){
      this.isPlayerExit = true
      }
      document.getElementById(this.cellName()).src = this.floorImage
      this.row ++
      document.getElementById(this.cellName()).src = this.characterImage
      this.movesLeft --
    }
  }
  
  up () {
    if (this.row > 1) {
      let futureLocation = [this.row - 1, this.col]

      //checking for blocked or breakable cells
      // if there are, the movement will not execute
      if (this.checkForBlock(futureLocation)){return}
      if (this.checkForBreak(futureLocation)){
        this.movesLeft --
        return
      }

      // checking is the exit is reached and setting true accordingly
      if (this.checkForExit(futureLocation)){
        this.isPlayerExit = true
      }
      document.getElementById(this.cellName()).src = this.floorImage
      this.row --
      document.getElementById(this.cellName()).src = this.characterImage
      this.movesLeft --
    }
  }
}
