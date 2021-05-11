// function linked to button which mutes and unmutes the music
document.getElementById('mute-button').addEventListener('click', function(){
  const music = document.getElementById('music')
  const button = document.getElementById('mute-button')
  // checks if music is paused and plays the music
  if (music.paused) {
    music.play()
    button.innerText = 'unmuted'
  } else {
    // otherwise, the music is paused
    music.pause()
    button.innerText = 'muted'
  }
})

// button to start and play the game
document.getElementById('play-button').addEventListener('click', function(){
  window.location.href = '/level-selector.html'
})
