document.getElementById('text-box-next').addEventListener('click', clickSound)

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

// order for current text box speakers
const visualSpeaker = {
  0: 'Aqua',
  1: 'Kazuma',
  2: 'Kazuma',
  3: 'Kazuma',
  4: 'Aqua',
  5: 'Kazuma',
  6: 'Kazuma'
}

// the text outline colors and border colors for the speaker
const visualSpeakerColor = {
  0: 'rgb(15, 167, 223)',
  1: 'rgb(148, 211, 35)',
  2: 'rgb(148, 211, 35)',
  3: 'rgb(148, 211, 35)',
  4: 'rgb(15, 167, 223)',
  5: 'rgb(148, 211, 35)',
  6: 'rgb(148, 211, 35)'
}

// order of images for the visual novel
const visualImages = {
  0: 'visual-novel/first.png',
  1: 'visual-novel/second.png',
  2: 'visual-novel/second.png',
  3: 'visual-novel/third.png',
  4: 'visual-novel/fourth.png',
  5: 'visual-novel/fourth.png',
  6: 'visual-novel/fifth.png'
}

document.getElementById('text-box-next').addEventListener('click', nextFrame)
function nextFrame () {
  if (visualCounter < visualScript.length) {
    let text = document.getElementById('text-box-text')
    let speaker = document.getElementById('text-box-speaker')
    text.innerText = visualScript[visualCounter]
    speaker.innerText = visualSpeaker[visualCounter]
    speaker.style.borderColor = visualSpeakerColor[visualCounter]
    speaker.style.webkitTextStrokeColor = visualSpeakerColor[visualCounter]
    document.getElementById('image-1').src = visualImages[visualCounter]
    visualCounter ++
    
  } else {
    window.location.href = 'https://finalproject.osamahamad0.repl.co/main-menu.html'
    playMenuMusic()
  }
  return 0
}
