/* eslint-disable no-unused-vars */
/* global Player */

// this is the player class
// your character's information and functions are stored and executed here
class Player {
  constructor (row, col, board, movesLeft, gateLocation = null) {
    // row and column to help identify the player's current location
    this.row = row
    this.col = col

    // the player's board or grid is taken in to limit global variables
    this.board = board

    // the character and ground images allow the player to visually see movement
    this.characterImage = './images/character.png'
    this.floorImage = './images/granite-floor.png'

    // for key levels this must be set to true to proceed and open the gate
    this.keyGained = false

    // shows the amount of moves left
    // if no moves left, game is over
    this.movesLeft = movesLeft

    // once the player reaches the exit, this will be set to true
    // the level will finish
    this.isPlayerExit = false

    // the gate location is stored in order to remove it one the key is aquired by player
    this.gateLocation = gateLocation
  }

  // returns wether or not the player has reached the end of level
  exitGame () {
    return this.isPlayerExit
  }

  // this checks if there are any moves left
  noMovesLeft () {
    if (this.movesLeft < 1) {
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

  // checks if the cell the player is going to contains the key
  // if the cell is of type key, key gained is set to true and gate is opened
  checkForKey (futureLocation) {
    const isKeyType = this.board.getCell(futureLocation).getType()
    if (isKeyType === 'key') {
      this.keyGained = true
      return true
    } else {
      return false
    }
  }

  // method to check if path is blocked, either block, or gate
  checkForBlock (futureLocation) {
    const isBlockType = this.board.getCell(futureLocation).getType()
    if (isBlockType === 'block' || isBlockType === 'void' || isBlockType === 'gate') {
      return true
    } else {
      return false
    }
  }

  // checks if the cell infront is breakable
  // if it is breakable, the cell will shatter but player will stay in place
  checkForBreak (futureLocation) {
    const isBreakType = this.board.getCell(futureLocation)
    if (isBreakType.getType() === 'break') {
      isBreakType.assignType('walk')
      isBreakType.createCell('walk')
      return true
    } else {
      return false
    }
  }

  // checks if the exit was reached
  // if reached, level complete screen will display
  checkForExit (futureLocation) {
    const isExitType = this.board.getCell(futureLocation).getType()
    if (isExitType === 'exit') {
      return true
    } else {
      return false
    }
  }

  // method to check if the path has a movable object
  checkForMove (futureLocation) {
    const isMoveType = this.board.getCell(futureLocation)
    if (isMoveType.getType() === 'move') {
      return true
    } else {
      return false
    }
  }

  // method to chech if there is a spike ahead
  checkForSpike (futureLocation) {
    const isSpikeType = this.board.getCell(futureLocation).getType()
    if (isSpikeType === 'spike') {
      return true
    } else {
      return false
    }
  }

  // when a player wants to go to a direction, this function is called
  // the cell locations will be set for each move in a different method
  direction (width, height, futureLocation, addToCol, addToRow, moveFuture, moveCell, passCondition) {
    // variable of cell ahaid to check for movable cells
    const moveTypeFuture = this.board.getCell(moveFuture)

    // returns the location of movable cell
    const moveMoveCell = this.board.getCell(moveCell)

    // depending on the condition the move will not be executed
    // the purpose of the pass conditions is to not allow the player to go off the board
    // going off the board causes a hurd of errors
    if (passCondition) {
      // checking for blocked or breakable cells
      // if there are, the movement will not execute
      if (this.checkForBlock(futureLocation)) {
        return
      }

      // checks for breakable cells ahead
      // the cell is broken and a move is taken from the player
      if (this.checkForBreak(futureLocation)) {
        this.movesLeft--
        return
      }

      // checks for movable cells ahead
      if (this.checkForMove(futureLocation)) {
        // gets the cell id and changes the images on the board to walk
        const isMoveType = this.board.getCell(futureLocation)

        // ensures that the cell infront of the movable cell is free
        // if the cell ahead is not free, the movable cell cannot move
        if (moveTypeFuture.getType() === 'walk') {
          isMoveType.assignType('walk')
          isMoveType.createCell('walk')

          moveMoveCell.assignType('move')
          moveMoveCell.createCell('move')

          this.movesLeft--
          return
        } else {
          return
        }
      }

      // checking is the exit is reached and setting true accordingly
      if (this.checkForExit(futureLocation)) {
        this.isPlayerExit = true
      }

      // if the player touches a spike, an additional move will be lost
      if (this.checkForSpike(futureLocation)) {
        this.movesLeft--
      }

      // if key is aquired, attribute will be set to true
      // the key will disappear
      if (this.checkForKey(futureLocation)) {
        const isKeyType = this.board.getCell(this.gateLocation)
        isKeyType.assignType('walk')
        isKeyType.createCell('walk')
      }

      // if no other condition blocks the movement, character will move
      document.getElementById(this.cellName()).src = this.floorImage
      this.col += addToCol
      this.row += addToRow

      // changes the current player cell to the player's image
      document.getElementById(this.cellName()).src = this.characterImage

      // takes one move from total moves
      this.movesLeft--
    }
  }

  /* when the player wants to go a specific direction, one of these methods are called
  the game script looks for key presses and calls the required method
  the methods are all the same, but with different parameters inputted
  future location gives the potential future location of the player
  move future gives the potential future location of a move type cell */
  right (width, height) {
    const futureLocation = [this.row, this.col + 1]
    const moveFuture = [futureLocation[0], futureLocation[1] + 1]
    const moveCell = [this.row, this.col + 2]
    this.direction(width, height, futureLocation, 1, 0, moveFuture, moveCell, this.col < width)
  }

  left (width, height) {
    const futureLocation = [this.row, this.col - 1]
    const moveFuture = [futureLocation[0], futureLocation[1] - 1]
    const moveCell = [this.row, this.col - 2]
    this.direction(width, height, futureLocation, -1, 0, moveFuture, moveCell, this.col > 1)
  }

  up (width, height) {
    const futureLocation = [this.row - 1, this.col]
    const moveFuture = [futureLocation[0] - 1, futureLocation[1]]
    const moveCell = [this.row - 2, this.col]
    this.direction(width, height, futureLocation, 0, -1, moveFuture, moveCell, this.row > 1)
  }

  down (width, height) {
    const futureLocation = [this.row + 1, this.col]
    const moveFuture = [futureLocation[0] + 1, futureLocation[1]]
    const moveCell = [this.row + 2, this.col]
    this.direction(width, height, futureLocation, 0, 1, moveFuture, moveCell, this.row < height)
  }
}
