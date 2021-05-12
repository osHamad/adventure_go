// function linked to button which mutes and unmutes the music
document.getElementById('mute-button').addEventListener('click', function () {
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

// this is the function that will play music when menu loads
function playMenuMusic () {
  let menuMusic = document.getElementById('music')
  menuMusic.loop = true
  menuMusic.volume = 0.2
  menuMusic.play()
}

// button to start and play the game
document.getElementById('play-button').addEventListener('click', function(){
  window.location.href = '/level-selector.html'
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

