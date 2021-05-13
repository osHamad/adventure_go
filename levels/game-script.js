document.addEventListener('keyup', function(event){
  if (event.keyCode === 27) {
    window.location.href = 'https://finalproject.osamahamad0.repl.co/'
  }

  // if there are no more moves left the game ends
  if (!currentCell.isMovesLeft()){
    document.getElementById('grid').style.display = 'none'
  }

  // defining user keyboard controls
  // each arrow key goes in dedicated direction
  if (event.keyCode === 39) {
    currentCell.right(board.getWidth())
  } else if (event.keyCode === 37) {
    currentCell.left()
  } else if (event.keyCode === 38) {
    currentCell.up()
  } else if (event.keyCode === 40) {
    currentCell.down(board.getHeight())
  }

  // checks if the player reached the exit after each button click
  // if so, the grid is hidden
  if (currentCell.isPlayerExit === true){
    document.getElementById('grid').style.display = 'none'
  }

  // updating the amount of moves left
  const moveDisplayer = document.getElementById('moves-display-p')
  moveDisplayer.innerText = currentCell.movesNumber()
})
