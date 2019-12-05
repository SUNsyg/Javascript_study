const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('player__slider')

function togglePlay() {
  console.log(video)
  const play = video.paused ? 'play' : 'pause'
  video[play]()
}

function updateButton() {
  const icon = this.paused ? '►' : '⏸️'
  console.log(icon)
  toggle.textContent = icon
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function skip() {
  video.currentTime = 3
  // video.currentTime += parseFloat(this.dataset.skip)
  console.log(video.currentTime)
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => {
  button.addEventListener('click', skip)
})
