// function linked to button which mutes and unmutes the music
document.getElementById('mute-button-1').addEventListener('click', muteButton1)
document.getElementById('mute-button-2').addEventListener('click', muteButton2)


function muteButton1() {
  const music = document.getElementById('music')
  const buttonImage = document.getElementById('mute-button-image-1')
  // checks if music is paused and plays the music
  if (music.paused) {
    music.play()
    buttonImage.src = 'images/unmute-button.png'
  } else {
    // otherwise, the music is paused
    music.pause()
    buttonImage.src = 'images/mute-button.png'
  }
}

function muteButton2() {
  const music = document.getElementById('music')
  const buttonImage = document.getElementById('mute-button-image-2')
  // checks if music is paused and plays the music
  if (music.paused) {
    music.play()
    buttonImage.src = 'images/unmute-button.png'
  } else {
    // otherwise, the music is paused
    music.pause()
    buttonImage.src = 'images/mute-button.png'
  }
}

// this is the function that will play music when menu loads
function playMenuMusic () {
  let menuMusic = document.getElementById('music')
  menuMusic.loop = true
  menuMusic.volume = 0.1
  menuMusic.play()
}

// button to start and play the game
document.getElementById('play-button').addEventListener('click', function(){
  const buttonImage = document.getElementById('mute-button-image-2')
  if (music.paused) {
    buttonImage.src = 'images/mute-button.png'
  }
  const mainMenu = document.getElementById('start-menu')
  const levelSelector = document.getElementById('level-buttons')
  mainMenu.style.display = 'none'
  levelSelector.style.display = 'block'
})

// button level navigator level 1
document.getElementById('level-1').addEventListener('click', function(){window.location.href = '/levels/level-1.html'
})

// button level navigator level 2
document.getElementById('level-2').addEventListener('click', function(){window.location.href = '/levels/level-2.html'
})

// button level navigator level 3
document.getElementById('level-3').addEventListener('click', function(){window.location.href = '/levels/level-3.html'
})

// button level navigator level 4
document.getElementById('level-4').addEventListener('click', function(){window.location.href = '/levels/level-4.html'
})

// button to view the code
document.getElementById('code-button').addEventListener('click', function(){
  window.open('https://github.com/osamaHamad-github/final_project')
})

// make sound when hovering over menu page buttons
document.getElementById('play-button').addEventListener('mouseover', hoverSound)
document.getElementById('settings-button').addEventListener('mouseover', hoverSound)
document.getElementById('code-button').addEventListener('mouseover', hoverSound)
document.getElementById('text-box-next').addEventListener('click', clickSound)

function hoverSound () {
  const sound = document.getElementById('hover-sound')
  sound.play()
}

function clickSound () {
  const sound = document.getElementById('click-sound')
  sound.play()
}

// this is the variable to know what to display on screen
let visualCounter = 0

// the script of what is said in the visual novel
visualScript = [
  'Kazuma, Kazuma!! All of our money somehow disappeared!!',
  'Hmm, money? Oh that..',
  'I spent it all yesterday at the tavern.',
  'Megumin also came with me.',
  'Kazuma..',
  'Oi, oi, I just said Megumin also came with me!!!',
  'Ok fine, I\'ll go earn back what I spent.. Sigh'

]

// order of images for the visual novel
const visualImages = {
  0: 'visual-novel/first.png',
  1: 'visual-novel/second.png',
  2: 'visual-novel/second.png',
  3: 'visual-novel/third.png',
  4: 'visual-novel/fourth.png',
  5: 'visual-novel/fourth.png',
  6: 'visual-novel/fifth.png',
  7: 'visual-novel/fifth.png'

}

document.getElementById('text-box-next').addEventListener('click', nextFrame)
function nextFrame () {
  if (visualCounter < visualScript.length) {
    let text = document.getElementById('text-box-text')
    text.innerText = visualScript[visualCounter]
    document.getElementById('image-1').src = visualImages[visualCounter]
    visualCounter ++
    
  } else {
    document.getElementById('visual-novel').style.display = 'none'
    document.getElementById('start-menu').style.display = 'block'
    playMenuMusic()
  }
  return 0
}

