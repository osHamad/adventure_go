let movesDisabled = false

document.addEventListener('keyup', function(event){
  // defining user keyboard controls
  if (movesDisabled) {return}
  if (event.keyCode === 39) {
    currentCell.right(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 37) {
    currentCell.left(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 38) {
    currentCell.up(board.getWidth(), board.getHeight())
  } else if (event.keyCode === 40) {
    currentCell.down(board.getHeight(board.getWidth(), board.getHeight()))
  }
})

document.addEventListener('keyup', function(event){
  // defining user keyboard controls
  if (event.keyCode === 82) {
    restartLevel()
  } else if (event.keyCode === 27) {
    goToMenu()
  }

  // checks if the player reached the exit after each button click
  // if so, the grid is hidden
  if (currentCell.exitGame()){
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('winning-screen').style.display = 'block'
    movesDisabled = true
    return
    
  }

  // if there are no more moves left the game ends
  if (currentCell.noMovesLeft()){
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('losing-screen').style.display = 'block'
    movesDisabled = true
    return
    
  }

  // updating the amount of moves left
  const moveDisplayer = document.getElementById('moves-display-p')
  moveDisplayer.innerText = currentCell.movesNumber()
})

function restartLevel () {
  location.reload()
}

function goToMenu () {
  
  window.location.href = 'https://finalproject.osamahamad0.repl.co/main-menu.html'
}

function nextLevel () {
  const levelLocation = {
  'https://finalproject.osamahamad0.repl.co/levels/level-1.html': 'https://finalproject.osamahamad0.repl.co/levels/level-2.html',
  'https://finalproject.osamahamad0.repl.co/levels/level-2.html': 'https://finalproject.osamahamad0.repl.co/levels/level-3.html',
  'https://finalproject.osamahamad0.repl.co/levels/level-3.html': 'https://finalproject.osamahamad0.repl.co/levels/level-4.html',
  }

  window.location.href = levelLocation[window.location.href]
}