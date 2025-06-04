const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const fastforward = document.querySelector('.fastforward');
const volume = document.querySelector('input[name="volume"]');
const playbackSpeed = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updateButton();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update volume and speed
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

playbackSpeed.addEventListener('input', () => {
  video.playbackRate = playbackSpeed.value;
});

// Skip forward/backward
rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});

fastforward.addEventListener('click', () => {
  video.currentTime += 25;
});

// Update progress bar
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = ${percent}%;
});

// Toggle play with button
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);