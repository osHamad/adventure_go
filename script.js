// function linked to button which mutes and unmutes the music
document.getElementById('mute-button-1').addEventListener('click', muteButton1)
document.getElementById('mute-button-2').addEventListener('click', muteButton2)

let volumeNumber = 0.1

document.getElementById('settings-button').addEventListener('click', function () {
  document.getElementById('start-menu').style.display = 'none'
  document.getElementById('settings').style.display = 'block'
})

document.getElementById('volume-increase').addEventListener('click', function () {
  const music = document.getElementById('music')
  const vol = document.getElementById('volume-number')
  if (volumeNumber < 0.9) {
    volumeNumber += 0.1
    music.volume = volumeNumber
    vol.innerText = Math.round(volumeNumber * 10)
  }
})

document.getElementById('volume-decrease').addEventListener('click', function () {
  const music = document.getElementById('music')
  const vol = document.getElementById('volume-number')
  if (volumeNumber > 0.1) {
    volumeNumber -= 0.1
    music.volume = volumeNumber
    vol.innerText = Math.round(volumeNumber * 10)
  }
})

function muteButton1 () {
  const music = document.getElementById('music')
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
  const menuMusic = document.getElementById('music')
  menuMusic.loop = true
  menuMusic.volume = volumeNumber
  menuMusic.play()
}

// button to start and play the game
document.getElementById('play-button').addEventListener('click', function () {
  const buttonImage = document.getElementById('mute-button-image-2')
  const music = document.getElementById('music')
  if (music.paused) {
    buttonImage.src = 'images/mute-button.png'
  } else if (music.play) {
    buttonImage.src = 'images/unmute-button.png'
  }
  const mainMenu = document.getElementById('start-menu')
  const levelSelector = document.getElementById('level-buttons')
  mainMenu.style.display = 'none'
  levelSelector.style.display = 'block'
})

// button level navigator level 1
document.getElementById('level-1').addEventListener('click', function (){
  window.location.href = '/levels/level-1.html'
})

// button level navigator level 2
document.getElementById('level-2').addEventListener('click', function (){
  window.location.href = '/levels/level-2.html'
})

// button level navigator level 3
document.getElementById('level-3').addEventListener('click', function (){
  window.location.href = '/levels/level-3.html'
})

// button level navigator level 4
document.getElementById('level-4').addEventListener('click', function (){
  window.location.href = '/levels/level-4.html'
})

// button to view the code
document.getElementById('code-button').addEventListener('click', function (){
  window.open('https://github.com/osamaHamad-github/final_project')
})

// make sound when hovering over menu page buttons
document.getElementById('play-button').addEventListener('mouseover', hoverSound)
document.getElementById('settings-button').addEventListener('mouseover', hoverSound)
document.getElementById('code-button').addEventListener('mouseover', hoverSound)
document.getElementById('level-1').addEventListener('mouseover', hoverSound)
document.getElementById('level-2').addEventListener('mouseover', hoverSound)
document.getElementById('level-3').addEventListener('mouseover', hoverSound)
document.getElementById('level-4').addEventListener('mouseover', hoverSound)

function hoverSound () {
  const sound = document.getElementById('hover-sound')
  sound.play()
}

function clickSound () {
  const sound = document.getElementById('click-sound')
  sound.play()
}

// this is the button to go back to the menu
document.getElementById('back-to-menu-1').addEventListener('click', function(){
  const buttonImage = document.getElementById('mute-button-image-1')
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

// this is the button to go back to the menu
document.getElementById('back-to-menu-2').addEventListener('click', function(){
  const buttonImage = document.getElementById('mute-button-image-1')
  if (music.paused) {
    buttonImage.src = 'images/mute-button.png'
  } else if (music.play) {
    buttonImage.src = 'images/unmute-button.png'
  }
  const mainMenu = document.getElementById('start-menu')
  const settingSelector = document.getElementById('settings')
  settingSelector.style.display = 'none'
  mainMenu.style.display = 'block'
})
