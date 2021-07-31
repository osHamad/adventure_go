/* global currentCell, board */
/* eslint-disable no-unused-vars */

// will be set to true when player finishes the level
// allows the game controls to be disabled after player loses
let movesDisabled = false

document.addEventListener('keyup', function (event) {
  // defining user keyboard controls
  // if moves disabled, controls will not work
  if (movesDisabled) { return }

  // each key calls a different direction method from player class object
  if (event.keyCode === 39) {
    currentCell.right(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 37) {
    currentCell.left(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 38) {
    currentCell.up(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 40) {
    currentCell.down(board.getWidth(), board.getHeight())
  }
})

document.addEventListener('keyup', function (event) {
  // defining user keyboard controls
  // if R is clicked, level will restart
  // if escape is clicked, player will go to main menu
  if (event.keyCode === 82) {
    restartLevel()
  } else if (event.keyCode === 27) {
    goToMenu()
  }

  // checks if the player reached the exit after each button click
  // if so, the grid is hidden
  if (currentCell.exitGame()) {
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('winning-screen').style.display = 'block'
    movesDisabled = true
    return
  }

  // if there are no more moves left the game ends
  if (currentCell.noMovesLeft()) {
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('losing-screen').style.display = 'block'
    movesDisabled = true
    return
  }

  // updating the amount of moves left
  const moveDisplayer = document.getElementById('moves-display-p')
  moveDisplayer.innerText = currentCell.movesNumber()
})

// this function reloads the current page which will restart the level
function restartLevel () {
  location.reload()
}

// changes the href location to the main menu html page
function goToMenu () {
  window.location.href = 'http://127.0.0.1:5500/main-menu.html'
}

// allows the program to know what the next level will be
function nextLevel () {
  // a dictionary that links the current level with relatively next level
  const levelLocation = {
    'http://127.0.0.1:5500/levels/level-1.html': 'http://127.0.0.1:5500/levels/level-2.html',
    'http://127.0.0.1:5500/levels/level-2.html': 'http://127.0.0.1:5500/levels/level-3.html',
    'http://127.0.0.1:5500/levels/level-3.html': 'http://127.0.0.1:5500/levels/level-4.html'
  }

  // next level will be fetched from the level location dictionary
  // href will be set to that page, redirecting the user to next level
  window.location.href = levelLocation[window.location.href]
}
