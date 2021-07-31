document.getElementById('text-box-next').addEventListener('click', clickSound)

// play clicking sound when next button is clicked
function clickSound () {
  const sound = document.getElementById('click-sound')
  sound.play()
}

// this is the variable to know what to display on screen
let visualCounter = 0

// the script of what is said in the visual novel
const visualScript = [
  'Kazuma, Kazuma!! All of our money somehow disappeared!!',
  'Hmm, money? Oh that..',
  'I spent it all yesterday at the tavern.',
  'Megumin also came with me.',
  'Kazuma..',
  'Oi, oi, I just said Megumin also came with me!!!',
  'Ok fine, I\'ll go earn back what I spent.. Sigh..'
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

// makes changes when the next button is clicked
document.getElementById('text-box-next').addEventListener('click', function () {
  // ensures that there are still frames left in the visual novel
  // if not, the visual novel will end and main menu will appear
  if (visualCounter < visualScript.length) {
    // the html box with all the characters' subtitles
    const text = document.getElementById('text-box-text')

    // changes the speaker according to the index
    const speaker = document.getElementById('text-box-speaker')

    // the script and the speaker are set to the dictionary value of the index
    text.innerText = visualScript[visualCounter]
    speaker.innerText = visualSpeaker[visualCounter]

    // the speaker name border changes according to the speaker
    // same thing with the text outline
    speaker.style.borderColor = visualSpeakerColor[visualCounter]
    speaker.style.webkitTextStrokeColor = visualSpeakerColor[visualCounter]

    // the current image changes to the current dict value of index
    document.getElementById('image-1').src = visualImages[visualCounter]

    // index is increased by one each time
    visualCounter++
  } else {
    // relocated to main menu if no more pictures left
    window.location.href = 'http://127.0.0.1:5500/main-menu.html'
  }
  return 0
})
