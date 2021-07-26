// function linked to button which mutes and unmutes the music
document.getElementById('mute-button-1').addEventListener('click', muteButton1)
document.getElementById('mute-button-2').addEventListener('click', muteButton2)

// set default volume to 0.1 of 1
let volumeNumber = 0.1

// when settings button is clicked, menu is hidden
// settings div is set to display: block
document.getElementById('settings-button').addEventListener('click', function () {
  document.getElementById('start-menu').style.display = 'none'
  document.getElementById('settings').style.display = 'block'
})

// increases volume in settings div
document.getElementById('volume-increase').addEventListener('click', function () {
  // get the music html tag by id
  const music = document.getElementById('music')

  // get the displayed volume number
  const vol = document.getElementById('volume-number')

  // volume cannot be increased past 1
  if (volumeNumber < 0.9) {
    volumeNumber += 0.1
    music.volume = volumeNumber

    // value is rounded because of decimal point inprecession
    // volume value multiplied by 10 for better UX
    vol.innerText = Math.round(volumeNumber * 10)
  }
})

// decrease the music volume
document.getElementById('volume-decrease').addEventListener('click', function () {
  // get the music tag from html
  const music = document.getElementById('music')

  // get the volume number displayed in settings
  const vol = document.getElementById('volume-number')

  // if the number is not 0 the volume can be decreased
  if (volumeNumber > 0.1) {
    volumeNumber -= 0.1
    music.volume = volumeNumber

    // again, rounded to prevent decimal point inprecession
    // multiplied by 10 for better UX
    vol.innerText = Math.round(volumeNumber * 10)
  }
})

// button to mute the music in menu
function muteButton1 () {
  // getting html music tag
  const music = document.getElementById('music')

  // getting the mute/unmute html icon in top left
  const buttonImage = document.getElementById('mute-button-image-1')

  // checks if music is paused and plays the music
  if (music.paused) {
    playMenuMusic()
    buttonImage.src = 'images/unmute-button.png'
  } else {
    // otherwise, the music is paused
    music.pause()
    buttonImage.src = 'images/mute-button.png'
  }
}

// same as function above, but for the mute button in the level selector
function muteButton2 () {
  const music = document.getElementById('music')
  const buttonImage = document.getElementById('mute-button-image-2')
  // checks if music is paused and plays the music
  if (music.paused) {
    playMenuMusic()
    buttonImage.src = 'images/unmute-button.png'
  } else {
    // otherwise, the music is paused
    music.pause()
    buttonImage.src = 'images/mute-button.png'
  }
}

// this is the function that will play music when menu loads
function playMenuMusic () {
  // getting music tag from html
  const menuMusic = document.getElementById('music')

  // looping the music
  menuMusic.loop = true

  // setting volume to initial 0.1
  menuMusic.volume = volumeNumber

  // unpause and play music
  menuMusic.play()
}

// button to start and play the game
document.getElementById('play-button').addEventListener('click', function () {
  // getting the image of the mute button
  const buttonImage = document.getElementById('mute-button-image-2')

  // getting the html music
  const music = document.getElementById('music')

  // if the music is paused, music icon will appear to be paused in selector
  if (music.paused) {
    buttonImage.src = 'images/mute-button.png'
  } else if (music.play) {
    buttonImage.src = 'images/unmute-button.png'
  }

  // hiding the start menu and displaying selector
  const mainMenu = document.getElementById('start-menu')
  const levelSelector = document.getElementById('level-buttons')
  mainMenu.style.display = 'none'
  levelSelector.style.display = 'block'
})

// button level navigator level 1
document.getElementById('level-1').addEventListener('click', function () {
  window.location.href = '/levels/level-1.html'
})

// button level navigator level 2
document.getElementById('level-2').addEventListener('click', function () {
  window.location.href = '/levels/level-2.html'
})

// button level navigator level 3
document.getElementById('level-3').addEventListener('click', function () {
  window.location.href = '/levels/level-3.html'
})

// button level navigator level 4
document.getElementById('level-4').addEventListener('click', function () {
  window.location.href = '/levels/level-4.html'
})

// button to view the code
document.getElementById('code-button').addEventListener('click', function () {
  window.open('https://github.com/osHamad/adventure_go')
})

// make sound when hovering over menu page buttons
document.getElementById('play-button').addEventListener('mouseover', hoverSound)
document.getElementById('settings-button').addEventListener('mouseover', hoverSound)
document.getElementById('code-button').addEventListener('mouseover', hoverSound)
document.getElementById('level-1').addEventListener('mouseover', hoverSound)
document.getElementById('level-2').addEventListener('mouseover', hoverSound)
document.getElementById('level-3').addEventListener('mouseover', hoverSound)
document.getElementById('level-4').addEventListener('mouseover', hoverSound)

// plays the hovering sound in menu and selector
function hoverSound () {
  const sound = document.getElementById('hover-sound')
  sound.play()
}

// this is the button to go back to the menu from the settings page
document.getElementById('back-to-menu-1').addEventListener('click', function () {
  const music = document.getElementById('music')
  const buttonImage = document.getElementById('mute-button-image-2')
  if (music.paused) {
    buttonImage.src = 'images/mute-button.png'
  } else if (music.play) {
    buttonImage.src = 'images/unmute-button.png'
  }
  const mainMenu = document.getElementById('start-menu')
  const levelSelector = document.getElementById('level-buttons')
  levelSelector.style.display = 'none'
  mainMenu.style.display = 'block'
})

// this is the button to go back to the menu from the selector page
document.getElementById('back-to-menu-2').addEventListener('click', function () {
  const mainMenu = document.getElementById('start-menu')
  const settingsSelector = document.getElementById('settings')
  settingsSelector.style.display = 'none'
  mainMenu.style.display = 'block'
})
